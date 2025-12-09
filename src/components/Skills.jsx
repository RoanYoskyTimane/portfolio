import { frontendSkills, backendSkills } from '../data/skills';
import './styles/Skills.css';

function Skills({scrollToSection, darkMode }) {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skill-cards">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="skill-cards">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;