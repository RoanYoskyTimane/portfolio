import React from "react";

function getYear(params) 
{
    const d = new Date();
    let year = d.getFullYear();
    return year;
}

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
            <p>© {getYear()} All rights reserved Roan Yosky Timane</p>
                <div className="social-media">
                    <a href="https://github.com/RoanYoskyTimane" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://mz.linkedin.com/in/roan-yosky-timane-9902a0291" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <nav className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
