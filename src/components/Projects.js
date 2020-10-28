import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../images/screens-image.png";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="page-card container my-4" id="projects">
        <h1 className="font-title pb-4"> Projects</h1>
        {/* <p>Check out the projects I've worked on recently.</p> */}
        <div className="row justify-content-center">
          <ProjectCard
            image={projectImage}
            title="Clover"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum
        has been"
            link="#"
          ></ProjectCard>
          <ProjectCard
            image={projectImage}
            title="Clover"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum
        has been"
            link="#"
          ></ProjectCard>
          <ProjectCard
            image={projectImage}
            title="Clover"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum
        has been"
            link="#"
          ></ProjectCard>
        </div>
      </div>

      <div className="parallax-img" id="background2"></div>
    </div>
  );
}

export default Projects;
