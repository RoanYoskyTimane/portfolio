import './styles/About.css';

function About({ scrollToSection, darkMode }) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        <p className="about-text">
          I'm a passionate full-stack developer specializing in building modern web applications. 
          With a focus on clean architecture and user experience, I transform ideas into elegant 
          digital solutions.
        </p>
        <p className="about-text">
          My approach combines technical expertise with creative problem-solving, ensuring every 
          project is both functional and beautiful.
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          className="cta-button"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default About;