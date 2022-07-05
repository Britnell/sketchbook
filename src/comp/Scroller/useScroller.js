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
  classChecker,
  classTrue = "sc-true",
  classFalse = "sc-false",
  variator,
  disableObserver = false,
}) => ({
  ref,
  varName,
  classChecker,
  classTrue,
  classFalse,
  variator,
  disableObserver,
  // lastCheck: false,
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
      const scrollMax = window.innerHeight + rec.height;

      let scroll;
      scroll = window.innerHeight - rec.top;
      if (rec.top > window.innerHeight) scroll = 0;
      if (scroll > scrollMax) scroll = scrollMax;

      const perc = Math.floor((100 * scroll) / scrollMax);

      if (item.classChecker) {
        const check = item.classChecker({ scroll, scrollMax, perc });
        if (check !== item.lastCheck) {
          if (check) {
            item.ref.current.classList.add(item.classFalse);
            item.ref.current.classList.remove(item.classTrue);
          } else {
            item.ref.current.classList.remove(item.classFalse);
            item.ref.current.classList.add(item.classTrue);
          }
          item.lastCheck = check;
        }
      }

      // write prop
      item.ref.current.style.setProperty("--s", scroll);
      item.ref.current.style.setProperty("--s-max", scrollMax);
      item.ref.current.style.setProperty("--p", perc);

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
      checkItemScroll(observedItem);
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