import React from "react";
import profilePicture from "../assets/images/Roan Yosky.png";
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedIn.svg"



function Hero() {
    return (
        <section id="profile">
            <div className="image-section">
                <div className="image-container">
                    <img id="roan" src={profilePicture} alt="Roan Yosky Timane"/>
                </div>
            </div>

            <div className="text-section">
                <h2 className="header2">Hello,</h2>
                <h2 className="header2">I'm</h2>
                <h2 className="header2">Roan Yosky Timane</h2>
                <p id="developer">Web Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2">Download CV</button>
                    <button className="btn btn-color-1"  onClick={() => window.location.href = "mailto:roanyosky@gmail.com?subject=Contact Request&body=Hello, I would like to get in touch with you!"}>Contact Me</button>
                </div>
                <div className="icon-container">
                    <a href="https://github.com/RoanYoskyTimane"><img src={github} alt="Github" id="github"/></a>
                    <a href="https://mz.linkedin.com/in/roan-yosky-timane-9902a0291"><img src={linkedin} alt="LinkedIn" id="linkedin"/></a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
