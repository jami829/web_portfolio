import React from "react";
import { FiChevronDown } from "react-icons/fi";



// css
import "../css/Landing.scss"

function Landing() {
  return (

    <div className="landing">
      <div className="landing_overlay"></div>
      <div className="landing_container">
        <div className="landing_contents">
          <div className="landing_inner">
            <div>
              <span className="landing_title">
                코딩에서 인생을 배우다.
              </span>
              <div className="scrollDown">
                <span><FiChevronDown /></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;