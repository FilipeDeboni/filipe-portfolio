import React from "react";
import NavbarProject from "./NavbarProject";
import Skills from "./Skills";
import "./ProjectDetail.css";
import project1 from "../images/portfolio1.png";

// Portfolio
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
                rel="noopener noreferrer"
                href="www.filipedeboni.me"
              >
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/FilipeDeboni/filipe-portfolio"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="column-two col-12 col-lg-6">
            <h2 className="title-project-detail">My Portfolio</h2>
            <div>
              <h5 className="title-project-detail pt-4">Description</h5>
              <p>
                I developed my portfolio aiming to gather my projects in a
                better and easy way. It was really amusing to apply some
                front-end concepts and also to think in its design details.
              </p>
              <p>
                As background images, to contrast with the "futuristic"
                neumorphism style I used on cards and buttons, I choose
                something related to the daily routine, subway pictures, in a
                way that the minimalist style of the page also contrasts with
                the crowded life in big cities.
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

export default Project3;
