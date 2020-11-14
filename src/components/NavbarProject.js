import React from "react";
import "./NavbarProject.css";

// para a nova navbar
// import { useHistory} from "react-router-dom";
// let history = useHistory();
// onClick={() => history.goBack()}

function NavbarProject(props) {
  return (
    <div className="navbar w-100">
      <nav className="w-100">
        <div className="navbar-project yellow hover">
          <a className="yellow hover" href="/#projects">
            Back
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavbarProject;
