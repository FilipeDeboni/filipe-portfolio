import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../images/screens-image.jpeg";
import "./Projects.css";

function Projects() {
  return (
    <div className=" pageCard container pt-5" id="projects">
      <h1 className="fontTitle mb-4"> Projects</h1>
      {/* <p>Check out the projects I've worked on recently.</p> */}
      <div className="">
        <div className="row justify-content-center">
          <div class="col-md-6 col-xl-4">
            <div className="card text-center">
              <img className="card-img-top" src={projectImage}></img>
              <div className="card-body">
                <h5 className="card-title">Clover</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been Lorem Ipsum has
                  been Lorem Ipsum has been
                </p>
                <button className="icons">
                  <i className="fab fa-github"></i>
                </button>
                <button className="resumee-button">
                  <span className="">Details >></span>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div className="card text-center">
              <img className="card-img-top" src={projectImage}></img>
              <div className="card-body">
                <h5 className="card-title">Pet Friend.ly</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div className="card text-center">
              <img className="card-img-top" src={projectImage}></img>
              <div className="card-body">
                <h5 className="card-title">My Portfolio</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
