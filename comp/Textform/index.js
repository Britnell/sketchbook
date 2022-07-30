import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";

const Page = () => {
  const ref = useRef();

  useEffect(() => {
    let mouse = {};
    let frame;

    const move = (ev) => {
      mouse.x = ev.x;
      mouse.y = ev.y;
    };
    window.addEventListener("mousemove", move);

    const loop = () => {
      if (ref.current) {
        const bound = 100;

        Array.from(ref.current.children).forEach((span, i) => {
          const rec = span.getBoundingClientRect();
          let vec = {
            y: mouse.y - rec.y + rec.height / 2,
            x: mouse.x - rec.x + rec.width / 2,
          };
          let dist = Math.sqrt(vec.x * vec.x + vec.y * vec.y);

          let el = span.firstChild;
          let x, y;
          if (dist > bound) {
            x = 0;
            y = 0;
          } else {
            x = (-vec.x * 2 * 0.4) / (bound - dist);
            y = (-vec.y * 2 * 0.4) / (bound - dist);
          }
          el.style.transform = `translate(${x}px,${y}px)`;
        });
      }

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <main>
      <div className={styles.morph}>
        <h1 ref={ref}>
          {/*  */}
          {"Supercalifragilistic".split("").map((l, i) => (
            <span key={i}>
              <span>{l}</span>
            </span>
          ))}
        </h1>
      </div>
    </main>
  );
};

export default Page;
