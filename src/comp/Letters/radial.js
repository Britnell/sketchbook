import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";
import { useInView } from "./helper";

const linear = (x, xmin, xmax, ymin, ymax) => {
  let p = (x - xmin) / (xmax - xmin);
  return ymin + p * (ymax - ymin);
};

const Radial = ({ children }) => {
  //

  let words = children.split(" ");
  const rad = 90;

  const move = (ev) => {
    let pos = {
      x: ev.clientX,
      y: ev.clientY,
    };

    const spans = Array.from(document.getElementsByClassName("radialLetter"));
    spans.forEach((span) => {
      const rect = span.getClientRects()[0];
      let v = {
        x: rect.x + rect.width / 2 - pos.x,
        y: rect.y + rect.height / 2 - pos.y,
      };
      let r = Math.sqrt(v.x * v.x + v.y * v.y);

      if (r > rad) {
        span.style.fontWeight = `100`;
        return;
      }

      const cent = linear(r, 0, rad, 900, 100);
      const weight = Math.floor(cent / 100) * 100;
      span.style.fontWeight = `${weight}`;
    });
  };

  const blockRef = useInView({
    onEnter: () => {
      window.addEventListener("mousemove", move);
    },
    onLeave: () => {
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
              <span key={`L${i}`} className="radialLetter">
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

export default Radial;
