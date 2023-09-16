import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footerstyle.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:'#fff',
                  marginRight:'2rem'}}/>
                  <div>
                    <p>250 Ajeet Colony,</p>
                    <p>Ludhiana.</p>
                  </div>
                </div>
                <div className="phone">
                  <h4>
                <FaPhone size={20} style={{color:'#fff',
                  marginRight:'2rem'}}/>
                  91-01010-10101
                  </h4>
                </div>
                <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:'#fff',
                  marginRight:'2rem'}}/>
                 chandni2003@gmail.com
                  </h4>
                </div>
            </div>

            <div className="right">
            <h4>About the contact</h4>
            <p>This is my contact no. and email which is mentioned above .I'm also on               Github and Linkdin.
            </p>
            <div className="social">
            <FaLinkedin size={30} style={{color:'#fff',
                  marginRight:'1rem'}}/>
            <FaGithub size={30} style={{color:'#fff',
                  marginRight:'1rem'}}/>
            <FaTwitter size={30} style={{color:'#fff',
                  marginRight:'1rem'}}/>
            <FaFacebook size={30} style={{color:'#fff',
                  marginRight:'1rem'}}/>     
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer