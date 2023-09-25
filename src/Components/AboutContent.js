import "./AboutContentStyles.css"
import {Link} from "react-router-dom";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a Full Stack Developer. I create fully fledged working websites.</p>
        </div>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS591GIbOZUwKttC6erR3fZKQ4Cn74CNllQWg&usqp=CAU" className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KRBr4GiTWXwUHGSOOA60mGHj0rkJBoQYc89mgb2Z&s" className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent