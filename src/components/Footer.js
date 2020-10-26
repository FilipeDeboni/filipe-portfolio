import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between responsiveText px-2 pt-2">
      <div className="row container ml-3">
        <div className="">Designed and developed by </div>
        <div>
          <span className=""> Filipe Deboni</span>
        </div>
      </div>

      <div className="d-flex">
        <div className="align-self-center mx-3">
          <h4
            target="_blank"
            href="https://www.linkedin.com/in/filipedeboni/"
            className="yellow hover"
          >
            <i className="fab fa-linkedin"></i>
          </h4>
        </div>
        <div className="align-self-center mr-3">
          <h4
            target="_blank"
            href="https://github.com/FilipeDeboni"
            className="yellow hover"
          >
            <i className="fab fa-github"></i>
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
