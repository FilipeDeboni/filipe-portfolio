import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function ProjectCard(props) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card card-projects text-center">
        <img
          className="card-img-top"
          src={props.image}
          alt="project screens"
        ></img>
        <div className="card-body">
          <h5 className="card-title-projects">{props.title}</h5>
          <p className="card-text-projects">{props.description}</p>
          <div className="mb-2 button-align-projects">
            <Link to={props.link} className="text-button-projects hover">
              Details >>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
