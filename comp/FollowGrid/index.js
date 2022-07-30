import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";

const Follow = () => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const d = 100;
    const mouse = { x: 0, y: 0 };
    let lastPos = { x: 0, y: 0 };
    ref.current.style.setProperty("--my", 0);
    ref.current.style.setProperty("--mx", 0);

    const move = (ev) => {
      const rect = ref.current.getBoundingClientRect();
      let x = (ev.x - rect.x) / d;
      let y = (ev.y - rect.y) / d;
      x = Math.floor(x);
      y = Math.floor(y);
      if (x !== lastPos.x) {
        ref.current.style.setProperty("--mx", x);
        lastPos.x = x;
      }
      if (y !== lastPos.y) {
        ref.current.style.setProperty("--my", y);
        lastPos.y = y;
      }
    };
    ref.current.addEventListener("mousemove", move);

    return () =>
      ref.current && ref.current.removeEventListener("mousemove", move);
  }, []);
  return (
    <main className={styles.container} ref={ref}>
      <h1>Following</h1>
      <div className={styles.follow}></div>
    </main>
  );
};

export default Follow;
