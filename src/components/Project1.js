import React from "react";
import NavbarProject from "./NavbarProject";
import "./ProjectDetail.css";
import projectImage from "../images/screens-image.png";

function Project1() {
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
              <a
                className="icons hover mx-3"
                target="_blank"
                href="https://clover-budget.herokuapp.com/"
              >
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
                href="https://github.com/FilipeDeboni/Ironhack-Project-2-Clover-Finance/tree/filipe"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="column-two col-12 col-lg-6">
            <h2 className="title-project-detail">Clover</h2>
            <div>
              <h5 className="title-project-detail pt-4">Description</h5>
              <p>
                Clover is a personal finance control application developed in 4
                days from concept to the final website based on the 50/30/20
                rule. It was developed in a team of two on the 6th week as a
                requirement of the Ironhack Web Development Bootcamp and consist
                on an apllication were the user can insert their revenue and
                expenses and the website calculate their budget on each
                category:
                <ul className="my-1">
                  <li>
                    Essentials (50%): basic expenses as rent and groceries
                  </li>
                  <li>
                    Life Style (30%): that things that make your life better as
                    dinner out, streaming services and vacation
                  </li>
                  <li>Priorities (20%): savings and investments</li>
                </ul>
                The user can change all the categories at will. As next features
                we planned improvements on reports and graphics.
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
                  <span className="font-weight-bold">Back-End: </span>Daniel
                  Albanez
                </li>
              </ul>
            </div>
            <div>
              <h5 className="title-project-detail pt-4">Technologies</h5>
              <span className="text-muted">
                #JavaScript #CSS #Bootstrap #MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
