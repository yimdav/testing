import React from "react";
import {Link} from "react-router-dom";
import './componentStyles.css';
function Login() {

  return(
  <section>
  <h2 style={{textAlign: 'center'}}>
    <form>
      <label htmlFor="name">Username</label><br />
      <input type="text" id="uname" name="uname" /><br />
      <label htmlFor="pwd">Password</label><br />
      <input type="password" id="pwd" name="pwd" /><br />
      <input type="submit" defaultValue="Login" /><br />
      <span className="psw"><br />
        <Link to="/report">Forgot password?</Link></span>
    </form>
  </h2>
</section>
  );
}
export default Login;