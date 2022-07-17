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
    if (!mainRef.current) return;

    const update = ({ x, y }) => {
      mainRef.current.style.setProperty("--mx", x / window.innerWidth);
      mainRef.current.style.setProperty("--my", y / window.innerHeight);
    };
    mainRef.current.addEventListener("mousemove", update);
    return () =>
      mainRef.current &&
      mainRef.current.removeEventListener("mousemove", update);
  }, []);

  return (
    <main ref={mainRef}>
      <p>More css secrets my LV</p>
      <h4>Line Heading : </h4>
      <h1 className={styles.lineheading}>All the Things</h1>

      <div ref={ref} className={styles.variable}>
        <p>Lorem Ipsum</p>
        <div>
          <label>
            Weight
            <input
              type="range"
              min="300"
              max="800"
              //   ="500"
              onChange={(ev) => setWeight(ev.target.value)}
            ></input>
          </label>
        </div>
        <div>
          Width
          <input
            type="range"
            min="75"
            max="100"
            //   ="500"
            onChange={(ev) => setWidth(ev.target.value)}
          ></input>
        </div>
      </div>
    </main>
  );
};
export default Page;
