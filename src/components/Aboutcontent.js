import "./Aboutcontent.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/chandni.jpeg"
// import React2 from "../assets/re2.jpeg"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
            This is Chandni Negi . I would like to tell that i'm a goaloriented and hardworking person with a passion for
programming ,creativity.I'm also a Cadet of NCC-19PBLudhiana.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                {/* <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent