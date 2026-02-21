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
                                {project.image ? 
                                (
                                    <img src={project.image} alt="" />
                                ):(
                                    <span className="placeholder-icon">
                                        {project.title.charAt(0)}
                                    </span>
                                )}
                                
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project <ExternalLink size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;