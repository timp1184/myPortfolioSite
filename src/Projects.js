
import { Github } from 'react-bootstrap-icons';
import Spacer from "./Spacer";
import CodeSnippet from "./codeSnippet1.png";

const Projects = () => {
    const featuredProject = [
        {
            "project-title":"Email Generator",
            "project-desc": "A minimal, dark blue theme for VS Code, Sublime Text, Atom.",
            "project-tech": ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
            "project-url": "https://www.npmjs.com/package/hyper-halcyon-theme",
            "key":1
        },
        {
            "project-title":"Shopify AddToCart Automation",
            "project-desc": "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available.",
            "project-tech": ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
            "project-url": "https://www.npmjs.com/package/hyper-halcyon-theme",
            "key":2
        },
        {
            "project-title":"NFL Sports Fantasy",
            "project-desc": "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.",
            "project-tech": ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
            "project-url": "https://www.npmjs.com/package/hyper-halcyon-theme",
            "key":3
        }
    ];
    return (
        <section className="projects" id="work">
            <Spacer />
            <div className="container">
                <h1 className="numbered-heading secondaryHeading">Some Things I've Built</h1>
                {featuredProject.map((project) =>(
                    <ul className="py-3" key={project.key}>
                        <li className="featured-project pt-3">
                            <div className="project-content row flex-row-reverse">
                                <div className="col-xs-12 col-md-5">
                                    <p className="project-overline text-right h6">Featured Project</p>
                                    <p className="h2 text-right">
                                        <a className="project-title" href="#" rel="noopener noreferrer" target="_blank">{project['project-title']}</a>
                                    </p>
                                    <div className="project-description p-2">
                                        <p className="text-right">{project['project-desc']}</p>
                                    </div>
                                    <ul className="project-tech-list list-inline text-right py-2">
                                        {project['project-tech'].map((tech, index) =>(
                                            <li className="list-inline-item px-2" key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                    <div className="project-links">
                                        <a href={project['project-url']} aria-label="GitHub Link" rel="noopener noreferrer" target="_blank"><Github /></a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-7 projects-snippet-container">
                                    <div className="projects-snippet mx-auto">                                       
                                        <img className='snippet' src={CodeSnippet} />                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))}    
            </div> 
            <Spacer />      
        </section>
    )
}

export default Projects;