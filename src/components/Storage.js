import React from "react";
import './componentStyles.css';
function Storage() {
   return(
    <section>
    <h2 style={{textAlign: 'center'}}>This is where you can view photos you have previously scanned <br />
      <section> <br />
        <div className="box">
          <img src="not-found.jpg" alt="user image 1" />
        </div>
        <div className="box">
          <img src="not-found.jpg" alt="user image 2" />
        </div>
        <div className="box">
          <img src="not-found.jpg" alt="user image 3" />
        </div>
      </section>
    </h2>
  </section>

   );
}
export default Storage;