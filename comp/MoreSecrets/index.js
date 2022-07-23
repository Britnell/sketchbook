import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";
const Page = () => {
  const mainRef = useRef();

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
      <p>
        <a href="https://www.youtube.com/watch?v=YxW8fnY4zak">
          More css secrets
        </a>{" "}
        by LV
      </p>
      <h4>Line Heading : </h4>
      <h1 className={styles.lineheading}>All the Things</h1>
    </main>
  );
};
export default Page;
