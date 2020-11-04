import React from "react";
import NavbarProject from "./NavbarProject";

import Skills from "./Skills";
import "./ProjectDetail.css";
import project1 from "../images/petfriendly1.png";
import project2 from "../images/petfriendly2.png";

function Project1() {
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
            <img
              src={project2}
              className="project-detail-img"
              alt="project screens"
              className="img-rounded"
            ></img>
            <div className="buttons-details mb-5">
              <a
                className="icons hover mx-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://ironhack-project-3-petfriendly.herokuapp.com/"
              >
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/FilipeDeboni/ironhack-project-3-petfriendly-front"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="column-two col-12 col-lg-6">
            <h2 className="title-project-detail">Pet Friend.ly</h2>
            <div>
              <h5 className="title-project-detail pt-4">Description</h5>
              <p>
                Pet Friend.ly is a social network with a specific feature for
                pet adoption. We used insights from a friend who has an NGO for
                rescuing animals, acting like a PO in the Project, choosing what
                features to implement and how they needed to be. It was
                developed in one week during the 9th week of the Ironhack Web
                Development Bootcamp as a final project.
              </p>
            </div>
            <div>
              <h5 className="title-project-detail pt-4">Roles</h5>
              <ul>
                <li>
                  <span className="font-weight-bold">Front-End: </span>Filipe
                  Deboni <span className="text-muted">(me)</span>
                </li>
                <li>
                  <span className="font-weight-bold">Back-End: </span>Artur
                  Farneze
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
                <Skills
                  icon={<i className="yellow fab fa-bootstrap"></i>}
                  skill="Bootstrap"
                ></Skills>
                <Skills
                  icon={<i className="yellow fas fa-server"></i>}
                  skill="MongoDB"
                ></Skills>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
