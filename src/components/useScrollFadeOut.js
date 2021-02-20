import React, { useCallback, useEffect, useRef } from "react";



const useScrollFadeOut = (direction = 'up', duration = 1, delay = 0) => {
  const element = useRef();

  // console.log("current", element.current)
  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)'
      case 'left':
        return 'translate3d(50%, 0, 0)'
      case 'right':
        return 'translate3d(-50%, 0, 0)'
      default:
        return;
    };
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;

    if (entry.isIntersecting) {
      console.log("entry", entry)
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 0;
      current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, [])

  useEffect(() => {
    let observer;
    const { current } = element;

    console.log("current1", current)

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);


      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      animationPlayState: "paused",
      opacity: 1,
      transform: handleDirection(direction),
    }
  };
};

export default useScrollFadeOut;