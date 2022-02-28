import React from "react";
import './componentStyles.css';
import {Link} from "react-router-dom";
function Footer() {
  return (
  <div>
  <section className="footer_banner" id="contact">
    <h2 className="hidden">Footer Banner Section </h2>
    <p className="home_header">Report any issues/difficulties you experience with our tool here!</p>
    <div className="button">
      <Link to="/report">Report Issues</Link>
    </div></section>
  {/* Copyrights Section */}
  <div className="copyright">©2022 Team F4</div>
</div>
  );
}
export default Footer;