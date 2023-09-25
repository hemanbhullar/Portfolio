import "./FooterStyles.css";

import React from 'react';
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>123 Sandhu Farm.</p>
                        <p>Haryana</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    9999999999</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    abc@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Heman Bhullar. I enjoyed in creating new Projects and design challenges.</p>
                <div className="social">
                    <Link to="https://www.instagram.com/bhullarheman/"><FaInstagram size={30} style={{color:"#fff",     marginRight: "1rem"}} /></Link>
                    <Link to="https://github.com/hemanbhullar"><FaGithub size={30} style={{color:"#fff",     marginRight: "1rem"}} /></Link>
                    <Link to="https://www.linkedin.com/in/heman-bhullar-331b94223/?originalSubdomain=in"><FaLinkedin size={30} style={{color:"#fff",     marginRight: "1rem"}} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer