import { useRef, useEffect } from "react";
import styles from "./Clip.module.scss";

export default function () {
  const ref = useRef();

  useEffect(() => {
    const move = (ev) => {
      let pos = (ev.x / window.innerWidth) * 100;
      pos = Math.floor(pos * 10) / 10;
      ref.current.style.setProperty("--mouse-x", `${pos}%`);
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={ref} className={styles.stripes}></div>
    </>
  );
}
