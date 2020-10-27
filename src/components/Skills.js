import React from "react";
import "./Skills.css";

function Skills(props) {
  return (
    <div>
      <div className="col text-center skill-box">
        <h2 className="yellow mb-0">{props.icon}</h2>
        <p className="skill-text">{props.skill}</p>
      </div>
    </div>
  );
}

export default Skills;
