import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";

const Page = () => {
  const ref = useRef();
  const mainRef = useRef();

  const setWeight = (w) => {
    ref.current.style.setProperty("--wg", w.toString());
  };
  const setWidth = (w) => {
    ref.current.style.setProperty("--wd", w.toString());
  };

  useEffect(() => {
    const update = ({ x, y }) => {
      if (!mainRef.current) return;
      mainRef.current.style.setProperty("--mx", x / window.innerWidth);
      mainRef.current.style.setProperty("--my", y / window.innerHeight);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <main ref={mainRef}>
      <div className={styles.container}>
        <p>variable font w. 2 axes on mouse move</p>
        <div ref={ref} className={styles.move}>
          <p>Lorem Ipsum</p>
        </div>

        <p>
          Match weight of different sizes - as so often this idea comes from
          L.V.
        </p>
        <div className={styles.match}>
          <span className={styles.dont}>DON'T</span>
          <span className={styles.believe}>believe</span>
          <span className={styles.every}>EVERYTHING</span>
          <span className={styles.you}>YOU</span>
          <span className={styles.think}>think</span>
        </div>
        <p>Could this be done more easily in svg? - YES</p>
        <p>
          But as so often, it is valuable in general that we are now able to
          match precisely the weight of a text to its surroundings. Also as LV
          says, there is some opportunity here to do this dynamically.
        </p>
      </div>
    </main>
  );
};
export default Page;
