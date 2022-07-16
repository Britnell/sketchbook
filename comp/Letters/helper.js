import { useEffect, useRef, useState } from "react";

export const useInView = ({ onEnter, onLeave, options }) => {
  const ref = useRef();

  useEffect(() => {
    const observeCallback = (entries) => {
      const [entry] = entries;
      if (entry.intersectionRatio === 0) onLeave();
      else onEnter();
    };
    const obersver = new IntersectionObserver(observeCallback, options);

    if (ref.current) obersver.observe(ref.current);

    return () => {
      if (ref.current) obersver.unobserve(ref.current);
      onLeave();
    };
  }, []);

  return ref;
};
