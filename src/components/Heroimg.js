import "./Heroimgstyles.css"
import React from 'react';
import IntroImg from "../assets/bg.jpeg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return(
   <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg}
        alt="IntroImg"/>
    </div>
    <div className="content">
        <p>HI, I'M A WEB-DEVELOPER.</p>
        <h1>Web Development.</h1>
    <div>
    <Link to="/project" className="btn">PROJECTS</Link>
    <Link to="/contact" className="btn btn-light">CONTACT</Link>
    </div>
  </div>
  </div>
  ); 
};

export default Heroimg