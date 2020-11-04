import React from "react";
import NavbarProject from "./NavbarProject";
import "./ProjectDetail.css";
import project1 from "../images/portfolio1.png";

function Project3() {
  return (
    <div>
      <NavbarProject />
      <div className="page-card container project-detail-page">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={project1}
              className="project-detail-img"
              alt="project screens"
              className="img-rounded"
            ></img>
            <div className="buttons-details mb-5">
              <a
                className="icons hover mx-3"
                target="_blank"
                href="www.filipedeboni.me"
              >
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
                href="https://github.com/FilipeDeboni/filipe-portfolio"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="column-two col-12 col-lg-6">
            <h2 className="title-project-detail">Filipe Deboni Portfolio</h2>
            <div>
              <h5 className="title-project-detail pt-4">Description</h5>
              <p>
                I developed my portfolio to gather my projects in a better and
                easy way. It was really fun apply some front-end concepts and
                also to think in it's design details.
              </p>
            </div>
            <div>
              <h5 className="title-project-detail pt-4">Roles</h5>
              <ul>
                <li>
                  <span className="font-weight-bold">
                    Front-End and Design:{" "}
                  </span>
                  Filipe Deboni <span className="text-muted">(me)</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="title-project-detail pt-4">Technologies</h5>
              <span className="text-muted">
                #React #JavaScript #CSS #Bootstrap #MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;
