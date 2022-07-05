import { useEffect, useState } from "react";

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
  variator,
  disableObserver = false,
}) => ({
  ref,
  varName,
  threshold,
  classBelow,
  classAbove,
  variator,
  disableObserver,
  // isAboveThreshold: false,
});

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

      // write prop
      item.ref.current.style.setProperty(item.varName, perc);
      if (item.variator) {
        const variators = item.variator(perc);
        variators.forEach((variator) => {
          item.ref.current.style.setProperty(variator.name, variator.val);
        });
      }
    };

    // run on every scroll pos change
    const scrollLoop = () => {
      observed.forEach((item) => {
        (item.disableObserver || item.watch) && checkItemScroll(item);
      });
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
    observed.forEach(({ ref, disableObserver }) => {
      !disableObserver && ref.current && Observer.observe(ref.current);
    });

    // Start animation Frame loop
    if (animationFrame) animationFrame(loop);

    // ** use Effect
    return () => {
      // Unobserve
      observed.forEach(
        ({ ref, disableObserver }) =>
          !disableObserver && ref.current && Observer.unobserve(ref.current)
      );
    };
  }, [observed]);

  // * Eo useScroller
};

export default useScroller;
