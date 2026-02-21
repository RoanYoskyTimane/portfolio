import './styles/About.css';

function About({ scrollToSection, darkMode }) {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        <p className="about-text">
          I don't believe in 'perfect' code, but I do believe in the right solution. I’m a software developer who thrives on the iterative process—building, learning, and refactoring until a project truly delivers an impact.
        </p>
        <p className="about-text">
          I refuse to be put in a box. Whether it’s mastering a new tool or collaborating across teams to solve a complex problem, I care more about the human element of software than following architectural dogmas. Let’s build something functional, impactful, and ever-evolving.
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