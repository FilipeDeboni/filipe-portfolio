import React from "react";
import NavbarProject from "./NavbarProject";
import "./ProjectDetail.css";
import project1 from "../images/clover1.png";
import project2 from "../images/clover2.png";

function Project2() {
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
                href="https://clover-budget.herokuapp.com/"
              >
                <i className="far fa-window-maximize"></i>
              </a>
              <a
                className="icons hover mx-3"
                target="_blank"
                rel="noopener noreferrer"
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
                Clover is a personal finance control application developed in
                one week from concept to the final website based on the 50/30/20
                rule. It was developed in a team of two as a requirement of the
                6th week of the Ironhack Web Development Bootcamp and consist on
                an application where the user can insert their revenue and
                expenses and the website calculate their budget on each custom
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
                The user can change all the categories at will. as requirements,
                we needed to use Handlebars. I personally preferred to use React
                like in other Projects deloped during the course for a better
                organization. As next features we planned improvements on
                reports and graphics.
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
                #JavaScript #CSS #Bootstrap #Handlebars #MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
