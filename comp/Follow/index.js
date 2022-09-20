import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";

const vecMax = (vec, max) => {
  if (vec.x > max) vec.x = max;
  else if (vec.x < -max) vec.x = -max;

  if (vec.y > max) vec.y = max;
  else if (vec.y < -max) vec.y = -max;
};

const limit = (x, min, max) => {
  if (x < min) return min;
  if (x > max) return max;
  return x;
};

const vecThreshold = (vec, thr) => {
  if (Math.abs(vec.x) < thr) vec.x = 0;
  if (Math.abs(vec.y) < thr) vec.y = 0;
};

const Follow = () => {
  const ref = useRef();
  const accRef = useRef();

  useEffect(() => {
    if (!ref.current) return;
    if (!accRef.current) return;

    let frame;
    const move = (ev) => {
      mouse.x = ev.clientX;
      mouse.y = ev.clientY;
    };

    const mouse = { x: 100, y: 100 };
    let v = { x: 0, y: 0 };
    let g = 10;
    let fric = 0.7;

    const animate = () => {
      if (!accRef.current || !ref.current) return;

      const accRect = accRef.current.getBoundingClientRect();
      const container = ref.current.getBoundingClientRect();

      // avoid edges
      mouse.x = limit(
        mouse.x,
        accRect.width / 2,
        window.innerWidth - accRect.width / 2
      );
      mouse.y = limit(
        mouse.y,
        container.y + accRect.height / 2,
        window.innerHeight - accRect.height / 2
      );

      let pos = {
        x: accRect.x + accRect.width / 2,
        y: accRect.y + accRect.height / 2,
      };

      let acc = {
        x: (mouse.x - pos.x) / g,
        y: (mouse.y - pos.y) / g,
      };
      vecThreshold(acc, 1);

      v.x = v.x * fric + acc.x;
      v.y = v.y * fric + acc.y;

      vecMax(v, 100);

      let setPos = {
        x: accRect.x + v.x,
        y: accRect.y + v.y,
      };

      accRef.current.style.transform = `translate(${setPos.x}px,${setPos.y}px)`;
    };

    const loop = () => {
      animate();
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    ref.current.addEventListener("mousemove", move);

    return () => {
      ref.current && ref.current.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <main className={styles.container} ref={ref}>
      <h1>Following acceleration</h1>
      <div className={styles.follow} ref={accRef}>
        <p>WHY won't you</p>
        <button>CLICK ME</button>
      </div>
    </main>
  );
};

export default Follow;
