import { useEffect, useRef, useState } from "react";
import styles from "./Scroll.module.css";

const getRaf = () =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame;

const initObserveItem = ({
  ref,
  varName = "--s",
  threshold,
  classBelow = "sc-below",
  classAbove = "sc-above",
}) => {
  return {
    ref,
    varName,
    threshold,
    classBelow,
    classAbove,
    // isAboveThreshold: false,
  };
};

const useScroller = (targets) => {
  const [observed, setObserved] = useState(() =>
    targets.map((it) => initObserveItem(it))
  );

  // * * * * * * *
  useEffect(() => {
    // * Animation Frame Event
    const animationFrame = getRaf();
    let last = 0;

    const checkItemScroll = (item) => {
      const rec = item.ref.current.getBoundingClientRect();
      const top = rec.top;
      const h = rec.height;
      const hWin = window.innerHeight;
      let perc;

      if (top > hWin) perc = 0;
      else if (top > -h) {
        perc = 1 - (top + h) / (hWin + h);
      } else perc = 1;
      perc = Math.floor(perc * 100);

      // apply classes above / below threshold
      if (item.threshold) {
        const above = perc < item.threshold;
        if (above !== item.isAboveThreshold) {
          if (above) {
            item.ref.current.classList.add(item.classAbove);
            item.ref.current.classList.remove(item.classBelow);
          } else {
            item.ref.current.classList.remove(item.classAbove);
            item.ref.current.classList.add(item.classBelow);
          }
          item.isAboveThreshold = above;
        }
      }
      item.ref.current.style.setProperty(item.varName, perc);
    };

    // run on every scroll pos change
    const scrollLoop = () => {
      observed.forEach((item) => item.watch && checkItemScroll(item));
    };

    // animation Frame loop
    const loop = () => {
      if (window.scrollY !== last) {
        last = window.scrollY;
        scrollLoop();
      }
      animationFrame(loop);
    };

    // * Observer

    const observeCallback = (entries) => {
      entries.forEach(checkEntry);
    };

    const checkEntry = (entry) => {
      // * Observe event

      const observedItem = observed.find(
        (obs) => obs.ref.current === entry.target
      );
      if (!observedItem) return;

      // * out event
      if (!entry.isIntersecting) {
        observedItem.watch = false;
        checkItemScroll(observedItem);
        return;
      }

      // * in event
      observedItem.watch = true;
    };

    const Observer = new IntersectionObserver(observeCallback, {
      root: null, // default: use viewport
      rootMargin: "0px",
      threshold: 0,
    });

    // Observe
    observed.forEach(({ ref }) => {
      ref.current && Observer.observe(ref.current);
    });

    // Start animation Frame loop
    if (animationFrame) animationFrame(loop);

    // ** use Effect
    return () => {
      // Unobserve
      observed.forEach(
        ({ ref }) => ref.current && Observer.unobserve(ref.current)
      );
    };
  }, [observed]);

  // * Eo useScroller
};

const Scroller = () => {
  const elRef = useRef();
  const secRef = useRef();

  useScroller([
    {
      ref: elRef,
      varName: "--x",
      threshold: 50,
    },
    {
      ref: secRef,
    },
  ]);

  return (
    <div className={styles.container}>
      <h2>Scroll animation w Intersection observer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum maximus libero, in ornare nunc tincidunt sit amet. Ut efficitur
        maximus molestie. Phasellus sed egestas elit, sed pharetra erat. Vivamus
        et facilisis dui. Etiam id neque quis sapien rutrum vulputate vitae sit
        amet tellus. Morbi a feugiat erat, at finibus dui. Fusce feugiat eros in
        ex mattis tempus. Suspendisse ullamcorper tellus at est tempor,
        tristique egestas neque hendrerit. Nunc massa leo, sodales at nisl
        finibus, porta sagittis magna. Nunc ultrices rutrum viverra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum maximus libero, in ornare nunc tincidunt sit amet. Ut efficitur
        maximus molestie. Phasellus sed egestas elit, sed pharetra erat. Vivamus
        et facilisis dui. Etiam id neque quis sapien rutrum vulputate vitae sit
        amet tellus. Morbi a feugiat erat, at finibus dui. Fusce feugiat eros in
        ex mattis tempus. Suspendisse ullamcorper tellus at est tempor,
        tristique egestas neque hendrerit. Nunc massa leo, sodales at nisl
        finibus, porta sagittis magna. Nunc ultrices rutrum viverra.
      </p>
      <div ref={elRef} className={styles.section}></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum maximus libero, in ornare nunc tincidunt sit amet. Ut efficitur
        maximus molestie. Phasellus sed egestas elit, sed pharetra erat. Vivamus
        et facilisis dui. Etiam id neque quis sapien rutrum vulputate vitae sit
        amet tellus. Morbi a feugiat erat, at finibus dui. Fusce feugiat eros in
        ex mattis tempus. Suspendisse ullamcorper tellus at est tempor,
        tristique egestas neque hendrerit. Nunc massa leo, sodales at nisl
        finibus, porta sagittis magna. Nunc ultrices rutrum viverra.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum maximus libero, in ornare nunc tincidunt sit amet. Ut efficitur
        maximus molestie. Phasellus sed egestas elit, sed pharetra erat. Vivamus
        et facilisis dui. Etiam id neque quis sapien rutrum vulputate vitae sit
        amet tellus. Morbi a feugiat erat, at finibus dui. Fusce feugiat eros in
        ex mattis tempus. Suspendisse ullamcorper tellus at est tempor,
        tristique egestas neque hendrerit. Nunc massa leo, sodales at nisl
        finibus, porta sagittis magna. Nunc ultrices rutrum viverra.
      </p>
      <div ref={secRef} className={styles.section + " second"}></div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum maximus libero, in ornare nunc tincidunt sit amet. Ut efficitur
        maximus molestie. Phasellus sed egestas elit, sed pharetra erat. Vivamus
        et facilisis dui. Etiam id neque quis sapien rutrum vulputate vitae sit
        amet tellus. Morbi a feugiat erat, at finibus dui. Fusce feugiat eros in
        ex mattis tempus. Suspendisse ullamcorper tellus at est tempor,
        tristique egestas neque hendrerit. Nunc massa leo, sodales at nisl
        finibus, porta sagittis magna. Nunc ultrices rutrum viverra.
      </p>
    </div>
  );
};

export default Scroller;
