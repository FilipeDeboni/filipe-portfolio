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
            description="An apllication for personal budget control, based on the 50/30/20 rule."
            link="/clover"
          ></ProjectCard>
          <ProjectCard
            image={projectImage}
            title="Pet Friend.ly"
            description="It's a social network with a specific feature for pet adoption."
            link="/petfriendly"
          ></ProjectCard>
          <ProjectCard
            image={projectImage}
            title="My Portfolio"
            description="Well, you are already here but I developd it to aggregate my projects effectively."
            link="/portfolio"
          ></ProjectCard>
        </div>
      </div>

      <div className="parallax-img" id="background2"></div>
    </div>
  );
}

export default Projects;
