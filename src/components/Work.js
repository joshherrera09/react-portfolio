import React from 'react';

const Work = ({ projects }) => {
    return (
        <div className="work_container">
            <h1>Projects</h1>
            <div className="projects_container">
                {projects.map((project) =>(
                    <div key={projects.id} className="prject">
                        <div className="image">
                            <a href={project.deployed}>
                                <img src={projects.thumbnail} alt={projects.title}></img>
                            </a>
                            </div>
                            <div className="title">
                                {project.title}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work