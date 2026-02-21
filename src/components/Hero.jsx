import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import myAvatar from "../assets/images/roanyosky.webp";
import './styles/Hero.css';

function Hero({ scrollToSection, darkMode }) {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-avatar">
            <img 
              src={myAvatar}
              alt="Roan Yosky" 
              className="avatar-img"
            />
          </div>
          <h1 className="hero-title">Roan Yosky</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Software Developer</p>
        </div>
        
        <p className="hero-description">
          A developer who builds for people, learns without limits, and prioritizes results over 'perfect' code.
        </p>

        <div className="hero-social">
          <a href="https://github.com/RoanYoskyTimane" className="social-link" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://mz.linkedin.com/in/roan-yosky-timane-9902a0291" className="social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:roanyosky@gmail.com?subject=Contact Request&body=Hello, I would like to get in touch with you!"
 className="social-link">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="scroll-down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

export default Hero;