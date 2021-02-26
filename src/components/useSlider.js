import React, { useCallback, useEffect, useRef } from "react";



const useSlider = (currentSlides = 0) => {
  const element = useRef();


  const handleSlider = useCallback(([entry]) => {
    const { current } = element;
    // console.log("entry", entry.isIntersecting)
    if (entry.isIntersecting) {
      // current.style.transition = "all 0.5s ease-in-out";
      current.style.transform = `translateX(${currentSlides}%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
  }, [])

  useEffect(() => {
    let observer;
    const { current } = element;
    // console.log("isIntersecting", current)
    if (current) {
      observer = new IntersectionObserver(handleSlider, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    };
  }, [handleSlider]);

  return {
    ref: element,
    // style: {
    //   opacity: 0,
    //   transform: handleDirection(direction),
    // }
  };
};

export default useSlider;