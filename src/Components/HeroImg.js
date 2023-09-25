import "./HeroImgStyles.css";

import React from 'react';

import {Link} from 'react-router-dom';
import Videofile from '/config/workspace/src/assets/HeroVideo.mp4';
import { Cursor } from "react-simple-typewriter";
// import IntroImg from "../assets/intro-bg.jpg"

const HeroImg = () => {

  return (
    <div className="hero">
        <div className="mask">
        <video className="intro-video" width="100%" height="350" autoPlay loop>
              <source src={Videofile} type="video/mp4" /> Your Browser does not support it.
        </video>
        </div>
        <div className="content">
            <p>HI, I'M A.</p>
            <h1><span style={{color: 'yellow'}}>Full Stack Developer</span><Cursor /></h1>
            <div>
                <Link to="/project" className="btn design">Projects</Link>
                <Link to="/contact" className="btn btn-light design">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg