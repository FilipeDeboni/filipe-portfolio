import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../images/screens-image.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="page-card container my-4" id="projects">
      <h1 className="font-title pb-4"> Projects</h1>
      {/* <p>Check out the projects I've worked on recently.</p> */}
      <div className="row justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div className="card card-projects text-center">
            <img className="card-img-top" src={projectImage}></img>
            <div className="card-body">
              <h5 className="card-title-projects">Clover</h5>
              <p className="card-text-projects">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum
                has been
              </p>
              <div className="mb-1">
                <button className="text-button-projects">
                  <span className="">Website</span>
                </button>
                <button className="icons-projects">
                  <i className="fab fa-github"></i>
                </button>
                <button className="text-button-projects">
                  <span className="">Details >></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div className="card card-projects text-center">
            <img className="card-img-top" src={projectImage}></img>
            <div className="card-body">
              <h5 className="card-title-projects">Clover</h5>
              <p className="card-text-projects">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum
                has been
              </p>
              <div className="mb-1">
                <button className="text-button-projects">
                  <span className="">Website</span>
                </button>
                <button className="icons-projects">
                  <i className="fab fa-github"></i>
                </button>
                <button className="text-button-projects">
                  <span className="">Details >></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div className="card card-projects text-center">
            <img className="card-img-top" src={projectImage}></img>
            <div className="card-body">
              <h5 className="card-title-projects">Clover</h5>
              <p className="card-text-projects">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been Lorem Ipsum has been
              </p>
              <div className="mb-1">
                <button className="text-button-projects">
                  <span className="">Website</span>
                </button>
                <button className="icons-projects">
                  <i className="fab fa-github"></i>
                </button>
                <button className="text-button-projects">
                  <span className="">Details >></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
