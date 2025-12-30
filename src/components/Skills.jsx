import { coreStack, familiarWith} from '../data/skills';
import './styles/Skills.css';

function Skills({ darkMode }) {
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
              <h3 className="category-title">Core stack:</h3>
              <div className="skill-cards">
                {coreStack.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <img className="skill-icon" alt={skill.name} src={skill.icon} />
                      <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Familiar with:</h3>
              <div className="skill-cards">
                {familiarWith.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <img className="skill-icon" alt={skill.name} src={skill.icon} />
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