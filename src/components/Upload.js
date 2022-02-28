import React, { useState, useEffect } from 'react';
import './componentStyles.css';
import FormData from 'form-data';
import axios from 'axios';
import {u, s} from '../apiKey.js';
function Upload() {
  let tempArray = [];
    //const [rgbList, setrgbList] = useState([]);
    const [rColor, setRColor] = useState('');
    const [gColor, setGColor] = useState('');
    const [bColor, setBColor] = useState('');
    let comma;
    if(bColor && gColor) {
      comma = ',';
    }
    //https://stackoverflow.com/questions/54942545/how-to-pass-variables-to-inline-css-function-in-react
    return(
      <section>
        <h2 style={{textAlign: 'center'}}>
          <p>Upload your image here!</p>
          <form action="placeholder">
            <input type="file"
                    id="myImage"
                    name="userImage"
                    onChange={(e) => uploadFile(e)}/><br />

          </form>
          <div style={{
            backgroundColor: `rgb(${rColor}, ${gColor}, ${bColor})`,
            width: '80px',
	          height: '70px',
	          border: '1px solid #000',
            marginLeft: '400px',
            marginTop: '40px',
            marginBottom: '10px',
            fontSize: '15px'
            }}>
              Dominant color will show here on upload!
          </div>
            <p>
               RGB:({rColor}{comma}{bColor}{comma}{gColor})
            </p>
        </h2>
      </section>
    );


      function uploadFile(event) {
        const selectedFile = event.target.files[0];
        console.log(selectedFile);

          if (selectedFile) {
            let data = new FormData();
            data.append('file', selectedFile);
            data.append('media', selectedFile);
            data.append('models', 'properties');
            data.append('api_user', u);
            data.append('api_secret', s);

            axios({
              method: 'post',
              url:'https://api.sightengine.com/1.0/check.json',
              data: data
            })
            .then(function (response) {
              // on success: handle response
              console.log(response.data);
              tempArray = [{id: 0, value: response.data.colors.dominant.r},
                           {id: 1, value: response.data.colors.dominant.g},
                           {id: 2, value: response.data.colors.dominant.b}]
              setRColor(response.data.colors.dominant.r);
              setGColor(response.data.colors.dominant.g);
              setBColor(response.data.colors.dominant.b);
            })
            .catch(function (error) {
              // handle error
              if (error.response) console.log(error.response.data);
              else console.log(error.message);
            });
        }
      }
      /*



<div style={{position:absolute,
              backgroundColor: rgb(rgbList[0].value, rgbList[1].value,
              rgbList[2].value), width: '100px', height: '100px', border: '1px solid #000'}}>
                This is a rectangle!</div>

            <p>
              RGB:(
              {rgbList.map((item) => {
                    return " " + item.value
              })}
              )
            </p>






{rgbList.map((item) => {
                return <p key={item.id}>{item.value}</p>;
            })}
rgbList.map((item) => {
                return <li key={item.id}>{item.value}</li>;
            })
<div style={{backgroundColor: 'rgb(colors[0], colors[1], colors[2])',
                padding: '10px',
                width: '50px',
                height: '50px',
                border: 'black'}}>
            </div>
            */
}


export default Upload;