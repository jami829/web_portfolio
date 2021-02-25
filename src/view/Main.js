import React, { useEffect, useRef } from "react";
import About from "./About2";
import Blog from "./Blog";
import Landing from "./Landing";
import Project from "./Project";
import Stack from "./Stack";
import Stack2 from "./Stack2";
import Mind from "./Mind";
import Footer from "./Footer";

// components

// icons
import { IoIosArrowUp } from "react-icons/io";

// css 
// import "../css/App.SCSS"




function Main() {

  const aboutSectionRef = useRef(null);
  // const topBtnRef = useRef(null);

  // const moveToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth"
  //   })
  // }

  // const topBtn = () => {
  //   const scrollTop = document.documentElement.scrollTop;
  //   const { current } = topBtnRef;
  //   if (scrollTop < 10) {
  //     current.style.opacity = 0;
  //   }
  //   else {
  //     current.style.opacity = 1;
  //   }
  // }

  // 랜딩페이지에서 두번째 section으로 넘어가게 한다.
  const handleScrollBtn = () => {
    const offsetTop = aboutSectionRef.current.offsetTop
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    // const scrollTop = document.documentElement.scrollTop;
    // console.log("scrollTop", scrollTop)

    // window.addEventListener("scroll", topBtn)
    // console.log("aboutSectionRef", aboutSectionRef)
    return () => {
      // window.addEventListener("scroll", topBtn)
    }
  })

  return (
    <div>

      <section>
        <Landing handleScrollBtn={handleScrollBtn} />
      </section>

      <section ref={aboutSectionRef}>
        <About />
      </section>

      <section>
        <Stack2 />
      </section>

      <section>
        <Blog />
      </section>

      <section>
        <Mind />
      </section>

      <section>
        <Project />
      </section>

      <section>
        <Footer />
      </section>
      {/* 
      <div className="scollToTop-btn" ref={topBtnRef}>
        <IoIosArrowUp />
      </div> */}
    </div>
  )

}

export default Main;