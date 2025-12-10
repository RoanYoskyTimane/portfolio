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
                    <a href="#" className="footer-link">
                        <Github size={20} />
                    </a>
                    <a href="#" className="footer-link">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="footer-link">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;