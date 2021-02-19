import React, { useCallback, useEffect, useRef } from "react";



const useScrollAnimation = () => {
  const element = useRef();

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
      // current.style.transitionProperty = 'all';
      // current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      // current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      // current.style.transform = 'translate3d(0, 0, 0)';

      // current.style.color = 'rgba(255, 255, 255, 255)';
      current.style.animationPlayState = "running";
      // current.style.animationName = "stack_typing";
      // current.style.animationDutarion = `${duration}s`;
      current.style.animationTimingFunction = 'steps(25, end)';
      // current.style.animationDelay = `${delay}s`
      current.style.animationIterationCount = "inherit"
    }
  }, [])

  useEffect(() => {
    let observer;
    const { current } = element;

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
      opacity: 0,
      // color: 'rgba(0, 0, 0, 0)',
      // transform: handleDirection(direction),
    }
  };
};

export default useScrollAnimation;