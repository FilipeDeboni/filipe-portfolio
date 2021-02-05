import React from "react";
import NavbarProject from "./NavbarProject";
import Skills from "./Skills";
import "./ProjectDetail.css";
import projectImg1 from "../images/netflix.png";

// Netflix
function Project4() {
  return (
    <div>
      <NavbarProject />
      <div className="page-card container project-detail-page">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={projectImg1}
              className="project-detail-img"
              alt="project screens"
              className="img-rounded"
            ></img>

            <div className="buttons-details mb-5">
              <a
                className="icons hover mx-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://filipedeboni-netflix-react.herokuapp.com/"
              >
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/FilipeDeboni/netflix-react"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="column-two col-12 col-lg-6">
            <h2 className="title-project-detail">Netflix Clone</h2>
            <div>
              <h5 className="title-project-detail pt-4">Description</h5>
              <p>
                This is a Netflix page developed for training React and CSS skills.
              </p>
              <p>
                It was very fun work with that, mostly with the list scroll feature and the API from TheMovieDB.com. 
                This API links a big database of TV shows and movies from all studios, that's why is 
                common to gather some TV shows information and pictures from another companies too, not just Netflix. 
              </p>
            </div>
            <div>
              <h5 className="title-project-detail pt-4">Roles</h5>
              <ul>
                <li>
                  <span className="font-weight-bold">
                    Front-End:{" "}
                  </span>
                  Filipe Deboni <span className="text-muted">(me)</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="title-project-detail pt-4">Technologies</h5>
              <span className="row justify-content-center">
                <Skills
                  icon={<i className="yellow fab fa-react"></i>}
                  skill="React.JS"
                ></Skills>
                <Skills
                  icon={<i className="yellow fab fa-js-square"></i>}
                  skill="JavaScript"
                ></Skills>
                <Skills
                  icon={<i className="yellow fab fa-css3-alt"></i>}
                  skill="CSS"
                ></Skills>
              </span>
              <div className="d-flex pt-2">
                <i className="check-sign fas fa-check pt-1"></i><p className="check-text pl-2">API</p>
              </div>
              <div className="d-flex">
                <i className="check-sign fas fa-check pt-1"></i><p className="check-text pl-2">Responsivity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project4;