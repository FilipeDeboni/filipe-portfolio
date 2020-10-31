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
          <div className="col-12 col-lg-5">
            <img
              src={projectImage}
              className="project-detail-img"
              alt="project screens"
            ></img>
            <p>buttons</p>
          </div>
          <div className="col-12 col-lg-7">
            <h3>Clover</h3>
            <div>
              <h4>Description</h4>
              <p>description</p>
            </div>
            <div>
              <h4>How was to do it</h4>
              <p>description</p>
            </div>
            <div>
              <h4>Roles</h4>
              <ul>
                <li>Filipe Deboni (me): </li>
                <li></li>
              </ul>
            </div>
            <div>
              <h4>Technologies</h4>
              <p>#JavaScript</p>
            </div>
            <div>
              <h4>Testimonials maybe?</h4>
              <p>#JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
