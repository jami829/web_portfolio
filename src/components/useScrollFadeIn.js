import React, { useCallback, useEffect, useRef } from "react";



const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)'
      case 'left':
        return 'translate3d(33.3%, 0, 0)'
      case 'right':
        return 'translate3d(-50%, 0, 0)'
      default:
        return;
    };
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;
    // console.log("entry", entry.isIntersecting)
    if (entry.isIntersecting) {
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';
    }
    else {
      current.style.transform = handleDirection(direction);
      current.style.opacity = 0;
      // current.style.transform = 'translate3d(0, -50%, 0)'
    }
  }, [])

  useEffect(() => {
    let observer;
    const { current } = element;
    // console.log("isIntersecting", current)
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    }
  };
};

export default useScrollFadeIn;