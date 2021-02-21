import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";



// css
import "../css/Landing.scss"

function Landing() {

  const titleLocation = useRef();

  // const visibleFunc = (opacityNum = 0) => {
  const visibleFuncNone = () => {
    const { current } = titleLocation;
    current.style.display = 'none'
    // current.style.opacity = opacityNum
  }
  const visibleFuncBlock = () => {
    const { current } = titleLocation;
    current.style.display = 'inline-block'
    // current.style.opacity = opacityNum
  }

  const handleFadeOut = () => {
    const { current } = titleLocation;
    const scrollTop = document.documentElement.scrollTop;
    current.style.transition = 'all .5s';  // transition 부드럽게 해줌

    // fade in-out
    if (scrollTop >= 300) {
      // current.style.animationName = 'display-down'
      current.style.opacity = 0
      // current.style.visibility = 'hidden'
      setTimeout(visibleFuncNone, 510)  // display none으로 설정하면 엘리먼트자체가 사라지므로 transiton 줄 시간자체가 1도 없기 때문에 setTimeout사용
      // current.style.display = "none"
      // current.style.animationPlayState = 'init'
    }
    else if (scrollTop === 0 || scrollTop < 300) {
      // current.style.animationPlayState = 'running'
      // current.style.animationName = 'display-up'
      // current.style.visibility = 'visible'
      current.style.opacity = 1
      setTimeout(visibleFuncBlock, 520)
      // current.style.display = 'inline-block'
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
            <div ref={titleLocation}>
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