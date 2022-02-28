import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './components/componentStyles.css';
import Home from "./components/Home.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";
import About from "./components/About.js"
import CreateAccount from "./components/CreateAccount.js"
import Login from "./components/Login.js";
import Report from "./components/Report.js";
import Storage from "./components/Storage.js";
import Upload from "./components/Upload.js";
function App() {
  return (
    <div style={{textDecoration:'none'}} className='container'>
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element= {<About />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
     </BrowserRouter>
     </div>
  );
}

export default App;