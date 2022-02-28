import React from "react";
import './componentStyles.css';
function CreateAccount() {
  return(
        <section>
  <h2 style={{textAlign: 'center'}}>
    <p> Create a user account here!</p>
    <form style={{border: '5px solid black'}}>
      <label htmlFor="fname">First Name:</label>
      <input type="text" id="fname" name="fname" placeholder="Enter your first name" required /><br />
      <label htmlFor="lname">Last Name:</label>
      <input type="text" id="lname" name="lname" placeholder="Enter your last name" required /><br />
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter desired username" required /><br />
      <label htmlFor="pwd">Password:</label>
      <input type="password" id="pwd" name="pwd" placeholder="Enter desired password" required /><br />
      <label htmlFor="confirmpwd">Verify Password:</label>
      <input type="password" id="confirmpwd" name="confirmpwd" placeholder="Verify your password" required /><br />
      <label htmlFor="bdate">Birthdate:</label>
      <input type="date" id="bdate" name="bdate" placeholder="mm/dd/yyyy" required /><br />
      <input type="submit" defaultValue="Create Account" /><br />
      <br />
      <a href="report.html">Forgot password?</a>
    </form>
  </h2>
</section>
  )
}
export default CreateAccount;