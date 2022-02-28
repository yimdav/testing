import React from "react";
import './componentStyles.css';
import {Link} from "react-router-dom";
function Header() {
  return(
        <header>
              <h1>
              <li><Link className="logo" style={{ textDecoration: 'none' }} to="/">RGB Vault</Link></li>
              </h1>
            <nav>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/report">CONTACT</Link></li>
              </ul>
            </nav>
          </header>

    );
}
export default Header;

/*
<div style={{textDecoration:'none'}} className="container">
        <header>
              <h1>
              <li><Link className="logo" to="/">RGB Vault</Link></li>
              </h1>
            <nav>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
              </ul>
            </nav>
          </header>
      </div>
      */