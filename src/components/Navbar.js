import React from "react";
import "./Navbar.css";

// para a nova navbar
// import { useHistory} from "react-router-dom";
// let history = useHistory();
// onClick={() => history.goBack()}

function Navbar(props) {
  console.log(props.match);
  return (
    <div className="navbar w-100">
      <nav className="w-100">
        <ul className="navbar-list">
          <li className="nav-item">
            <a className="yellow hover" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="yellow hover" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="yellow hover" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
