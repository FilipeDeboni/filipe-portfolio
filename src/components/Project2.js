import React from "react";
import NavbarProject from "./NavbarProject";
import "./ProjectDetail.css";
import projectImage from "../images/screens-image.png";

function Project2() {
  return (
    <div>
      <NavbarProject />
      <div className="page-card container project-detail-page">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={projectImage}
              className="project-detail-img"
              alt="project screens"
            ></img>
            <div className="buttons-details mb-5">
              {/* <a
                className="text-button hover mx-3"
                target="_blank"
                href="https://clover-budget.herokuapp.com/"
              >
                <span className="">
                  <i className="icon-size pr-1 far fa-window-maximize"></i>{" "}
                  website
                </span>
              </a> */}
              <a className="icons hover mx-3" target="_blank" href="#">
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
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
                pet adoption. We used insights for the features from a friend
                who has an NGO for rescuing animal (acting like an PO in the
                Project). It was developed in the 9th week of the Ironhack Web
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

export default Project2;
