import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import myAvatar from "../assets/images/Roan Yosky.png";
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
          <p className="hero-subtitle">Full Stack Developer</p>
        </div>
        
        <p className="hero-description">
          Crafting elegant digital experiences through clean code and thoughtful design
        </p>

        <div className="hero-social">
          <a href="https://github.com/RoanYoskyTimane" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://mz.linkedin.com/in/roan-yosky-timane-9902a0291" className="social-link">
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