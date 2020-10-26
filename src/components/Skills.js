import React from "react";

function Skills(props) {
  return (
    <div>
      <div className="col text-center">
        <h2 className="yellow mb-0">{props.icon}</h2>
        <p>{props.skill}</p>
      </div>
    </div>
  );
}

export default Skills;
