import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between align-content-center responsiveText">
      <div className="align-self-center">© 2020 by Filipe Deboni</div>

      <div className="d-flex align-self-center">
        <div className="footer-icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/filipedeboni/"
            className="yellow hover"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-icons">
          <a
            target="_blank"
            href="https://github.com/FilipeDeboni"
            className="yellow hover"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
