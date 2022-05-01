import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";
import { useInView } from "./helper";

const radius = 160;

const linear = (x, xmin, xmax, ymin, ymax) => {
  let p = (x - xmin) / (xmax - xmin);
  return ymin + p * (ymax - ymin);
};

const Hidden = ({ children }) => {
  let words = children.split(" ");
  const posRef = useRef({ x: 0, y: 0 });

  const update = (ev) => {
    let pos = {
      x: ev.clientX,
      y: ev.clientY,
    };

    const spans = Array.from(document.getElementsByClassName("hidden"));
    spans.forEach((span) => {
      const rect = span.getClientRects()[0];
      let v = {
        x: rect.x + rect.width / 2 - pos.x,
        y: rect.y + rect.height / 2 - pos.y,
      };
      let r = Math.sqrt(v.x * v.x + v.y * v.y);

      if (r < radius) {
        span.style.color = "#000";
      } else {
        span.style.color = "#fff";
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
    <div ref={ref} className={styles.hidden}>
      {words.map((word, i) => (
        <span key={`W${i}`}>
          <span className={styles.hiddenspan}>
            {word.split("").map((letter, i) => (
              <span key={`L${i}`} className="hidden">
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

export default Hidden;
