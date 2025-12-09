import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import './styles/Projects.css';

function Projects({scrollToSection, darkMode }) {
    return (
        <section id="work" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <h2 className="section-title">Selected Work</h2>
                    <div className="section-divider"></div>
                    <p className="section-description">Recent projects and collaborations</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                [Project Preview]
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <button className="project-link">
                                View Project <ExternalLink size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;