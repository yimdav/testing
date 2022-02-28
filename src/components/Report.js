import React from "react";
import './componentStyles.css';
function Report() {
  return(
    <section>
      <h2 style={{textAlign: 'center'}}>
        <p>Having trouble? Please report any issues<br />
          or concerns you have with our tool here!</p>
        <form>
          <label htmlFor="isstype">Issue Type</label><br />
          <select required id="isstype" name="isstype">
            <option value="forgotpw">Forgot Password</option>
            <option value="forgotuser">Forgot Username</option>
            <option value="other">Other</option> </select><br />
          <label htmlFor="name">Name</label><br />
          <input type="text" id="name" name="name" required /><br />
          <label htmlFor="uname">Username</label><br />
          <input type="text" id="uname" name="uname" required /><br />
          <label htmlFor="report">Report Issues</label><br />
          <textarea id="report" name="report" rows={5} cols={25} placeholder="Please report any issues you may have experienced with our tool here!" defaultValue={""} /><br />
          <input type="submit" defaultValue="Submit" required />
        </form>
      </h2>
    </section>

  )
}
export default Report;