import React from "react";
import './componentStyles.css';
function About() {
  const h2Style = {
    border: '3px',
    borderStyle: 'solid',
    borderWidth: '10px',
    borderColor: 'black',
    padding: '1em'
  }

  return(
    <section>
    <h2 style={{textAlign:'center'}}>
        <p style={h2Style}>
        <span style={{color: 'green'}}>R</span>
        <span style={{color: 'green'}}>G</span>
        <span style={{color: 'blue'}}>B</span>
        <span style={{color: 'black'}}>Vault</span>
        is a simple webapp utilizing SightEngine's
        advanced image moderation API
        hosted with Microsoft Azure. You can
        upload an image to be scanned to learn more about the
        colors in your image, it can even provide color recommendations
        such as accent colors and determine the
        dominant color of the image.
      </p>

    </h2>
    </section>

  );
}
export default About;
