import React from "react";
import {Router, Link} from "react-router-dom";
import './componentStyles.css';
function Home() {
  return(
  <div>
    <section>
      <h2 style={{textAlign: 'center'}}>
        <span style={{color: 'red'}}>R</span>
        <span style={{color: 'green'}}>G</span>
        <span style={{color: 'blue'}}>B</span>
        <span style={{color: 'black'}}>Vault</span>
        <p> Welcome to Pixel Vault, a place where you can <br /> find out the colorful truth about your pictures!</p>
      </h2>
    </section>
    {/* Button Group */}
    <div className="btn-group" style={{width: '100%'}}>
      <Link to="/login"><button style={{width: '25%'}}>Login</button></Link>
      <Link to="/createaccount"> <button style={{width: '25%'}}>Create Account</button></Link>
      <Link to="/upload"> <button style={{width: '25%'}}>Upload Image</button></Link>
      <Link to="/storage"><button style={{width: '25%'}}>Storage</button></Link>
      </div>
  </div>
  );

}
export default Home;