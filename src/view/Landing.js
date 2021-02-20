import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import useScrollFadeOut from "../components/useScrollFadeOut";

// css
import "../css/Landing.scss"

function Landing() {

  const titleLocation = useRef();

  const handleFadeOut = () => {
    const { current } = titleLocation;
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 300) {
      current.style.opacity = 0
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", handleFadeOut)
    return () => {
      window.addEventListener("scroll", handleFadeOut)
    }
  })

  return (

    <div className="landing">
      <div className="landing_overlay"></div>
      <div className="landing_container">
        <div className="landing_contents">
          <div className="landing_inner">
            <div>
              <span className="landing_title" ref={titleLocation}>
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