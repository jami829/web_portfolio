import React, { useEffect, useRef, useState } from "react";

// css
import "../css/Project.scss";

// img
import finalPro from "../img/final-pro2.png"
import firstPro from "../img/first-pro.png"

const TOTAL_SLIDES = 1;

function Project() {


  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const goLeft = () => {
    currentSlide === 0 ? setCurrentSlide(-100 * TOTAL_SLIDES) : setCurrentSlide(currentSlide + 100)
  }
  const goRight = () => {
    currentSlide === -100 * TOTAL_SLIDES ? setCurrentSlide(0) : setCurrentSlide(currentSlide - 100)
  }

  useEffect(() => {
    // const { current } = slideRef
    // current.style.transition = "all .5s ease-in-out"
    // current.style.transform = `translateX(${currentSlide}%)`

    setTimeout(goRight, 2000)
  }, [currentSlide])

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
        <div className="project-box-2" ref={slideRef}>
          {currentSlide}
          <div className="img-box">
            <div style={{ transform: `translateX(${currentSlide}%)` }}>
              <img src={finalPro}></img>
              {/* </div> */}
              {/* <div className="img-box" style={{ transform: `translateX(${currentSlide}%)` }}> */}
              <img src={firstPro}></img>
            </div>
          </div>
          <button onClick={goLeft}>left</button>
          <button onClick={goRight}>right</button>
        </div>
      </div>
    </div>
  )
}

export default Project;