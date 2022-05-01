import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";
import { useInView } from "./helper";

const linear = (x, xmin, xmax, ymin, ymax) => {
  let p = (x - xmin) / (xmax - xmin);
  return ymin + p * (ymax - ymin);
};

const Radius = ({ children }) => {
  //

  let words = children.split(" ");
  const rad = 60;

  const move = (ev) => {
    let pos = {
      x: ev.clientX,
      y: ev.clientY,
    };

    const spans = Array.from(document.getElementsByClassName("radiusletter"));
    spans.forEach((span) => {
      const rect = span.getClientRects()[0];
      let v = {
        x: rect.x + rect.width / 2 - pos.x,
        y: rect.y + rect.height / 2 - pos.y,
      };
      let r = Math.sqrt(v.x * v.x + v.y * v.y);

      if (r < rad) {
        span.style.fontWeight = "900";
      } else {
        span.style.fontWeight = "400";
      }
    });
  };

  const blockRef = useInView({
    onEnter: () => {
      console.log(" reg");
      window.addEventListener("mousemove", move);
    },
    onLeave: () => {
      console.log(" unreg ");
      window.removeEventListener("mousemove", move);
    },
    options: {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    },
  });

  return (
    <div ref={blockRef}>
      {words.map((word, i) => (
        <span key={`W${i}`}>
          <span className={styles.radius}>
            {word.split("").map((letter, i) => (
              <span key={`L${i}`} className="radiusletter">
                {letter}
              </span>
            ))}
          </span>
          <span>&nbsp;</span>
        </span>
      ))}
    </div>
  );
};

export default Radius;
