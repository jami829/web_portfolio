import React from "react";

// css
import "../css/Project.scss";

// img
import finalPro from "../img/final-pro2.png"

function Project() {
  return (
    <div className="project">
      <div className="project-inner">
        <div className="img-box">
          <img src={finalPro}></img>
        </div>
      </div>
    </div>
  )
}

export default Project;