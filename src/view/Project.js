import React, { useEffect, useRef, useState } from "react";

// css
import "../css/Project.scss";

// img
import finalPro from "../img/final-pro.png"
import firstPro from "../img/first-pro.png"

// icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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

  const handlePage1 = () => {
    setCurrentSlide(0)
  }
  const handlePage2 = () => {
    setCurrentSlide(-100)
  }
  useEffect(() => {
    // const { current } = slideRef
    // current.style.transition = "all .5s ease-in-out"
    // current.style.transform = `translateX(${currentSlide}%)`


    setTimeout(goRight, 5000)
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
          <div className="img-box">
            <div style={{ transform: `translateX(${currentSlide}%)` }}>
              <img src={finalPro}></img>
              {/* </div> */}
              {/* <div className="img-box" style={{ transform: `translateX(${currentSlide}%)` }}> */}
              <img src={firstPro}></img>
            </div>
          </div>
          <div className="moveDirect-pro">
            {currentSlide === 0
              ? <div className="here-pro">01</div>
              : <div className="not-here-pro" onClick={handlePage1}>01</div>
            }
            {currentSlide === -100
              ? <div className="here-pro">02</div>
              : <div className="not-here-pro" onClick={handlePage2}>02</div>
            }

          </div>
          <button id="left-btn" onClick={goLeft}><FaAngleLeft /></button>
          <button id="right-btn" onClick={goRight}><FaAngleRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Project;