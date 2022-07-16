import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";
import { useInView } from "./helper";

const linear = (x, xmin, xmax, ymin, ymax) => {
  let p = (x - xmin) / (xmax - xmin);
  return ymin + p * (ymax - ymin);
};

const Underline = ({ children }) => {
  let words = children.split(" ");
  const posRef = useRef({ x: 0, y: 0 });

  const update = (ev) => {
    const rad = 70;
    let pos = {
      x: ev.clientX,
      y: ev.clientY,
    };

    const spans = Array.from(document.getElementsByClassName("underletter"));
    spans.forEach((span) => {
      const rect = span.getClientRects()[0];
      let v = {
        x: rect.x + rect.width / 2 - pos.x,
        y: rect.y + rect.height / 2 - pos.y,
      };
      let r = Math.sqrt(v.x * v.x + v.y * v.y);

      if (r < rad) {
        span.style.textDecoration = "underline"; // line-through overline
      } else {
        span.style.textDecoration = "none";
      }
    });
  };

  const ref = useInView({
    onEnter: () => window.addEventListener("mousemove", update),
    onLeave: () => window.removeEventListener("mousemove", update),
    options: {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    },
  });

  return (
    <div ref={ref}>
      {words.map((word, i) => (
        <span key={`W${i}`}>
          <span className={styles.underline}>
            {word.split("").map((letter, i) => (
              <span key={`L${i}`} className="underletter">
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

export default Underline;
