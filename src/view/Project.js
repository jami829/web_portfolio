import React from "react";

// css
import "../css/Project.scss";

// img
import finalPro from "../img/final-pro2.png"

function Project() {
  return (
    <div className="project">
      <div className="project-inner">
        <div className="project-box-1">
          <div className="project-title">
            Here's portfolio
          </div>
          <div className="project-subtitle">
            프로젝트를 확인해보세요!
          </div>
        </div>
        <div className="project-box-2">

          <div className="img-box">
            <img src={finalPro}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;