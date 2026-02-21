import {Github, Linkedin, Mail} from 'lucide-react';
import './styles/Footer.css';

function getYear(params)
{
    const d = new Date();
    return d.getFullYear();
}


function Footer({ scrollToSection,darkMode }) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © {getYear()}  Roan Yosky Timane. All rights reserved.
                </p>
                <div className="footer-social">
                    <a href="https://github.com/RoanYoskyTimane" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                    </a>
                    <a href="https://mz.linkedin.com/in/roan-yosky-timane-9902a0291" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:roanyosky@gmail.com?subject=Contact Request&body=Hello, I would like to get in touch with you!" className="footer-link">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;