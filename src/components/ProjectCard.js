import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className="card bg-transparent col-xs-12 col-sm-6 col-md-4">
      <img
        className="card-img-top rounded"
        src={props.image}
        alt="Project screens"
      />
      <div className="card-body">
        <h4 className="fontTitle text-center">
          <span className="font-title yellow">{props.name}</span>
          {props.subName}
        </h4>
        <p className="responsiveText mb-1 text-center">{props.description}</p>
        <p className="responsiveText mb-0 text-secondary text-center">
          {props.hashtags}
        </p>
      </div>
      <div className="card-body d-flex justify-content-around pt-0">
        <Link to={props.website} className="btn">
          <i className="fab fa-github"></i> GitHub
        </Link>
        <Link to={props.website} className="btn">
          <i class="far fa-window-maximize"></i> Website
        </Link>
        <Link to={props.website} className="btn">
          <i class="fas fa-project-diagram"></i> Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
