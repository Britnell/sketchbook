import { useEffect, useRef } from "react";
import styles from "./Scroll.module.css";

const getRaf = () =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame;

const Scroll = () => {
  const elRef = useRef();

  useEffect(() => {
    //
    const raf = getRaf();

    let last = 0;

    const look = (scroll) => {
      if (!elRef.current) return;
      // console.log("af ", scroll);
      elRef.current.style.setProperty("--s", scroll);
      elRef.current.textContent = scroll;
    };

    const scroller = () => {
      const scroll = window.scrollY;
      if (scroll !== last) {
        last = scroll;
        look(scroll);
      }
      raf(scroller);
    };

    if (raf) raf(scroller);
    // return () => {};
  }, [elRef]);

  return (
    <div className={styles.container}>
      <h2>Scroll animation with requestAnimationFrame </h2>
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
    </div>
  );
};

export default Scroll;
