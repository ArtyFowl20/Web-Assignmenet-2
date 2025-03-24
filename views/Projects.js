import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ userDetails }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {userDetails.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;