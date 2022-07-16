import { useEffect, useRef } from "react";
import styles from "./Perpective.module.scss";

const Page = () => {
  const containerRef = useRef();

  useEffect(() => {
    const mouse = (ev) => {
      if (!containerRef.current) return;
      const y = ev.clientY / window.innerHeight;
      containerRef.current.style.setProperty("--my", y.toString());
    };
    window.addEventListener("mousemove", mouse);
    () => window.removeEventListener("mousemove", mouse);
  }, [containerRef]);

  return (
    <main>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.left}>
          <div>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
          </div>
          <div>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
          </div>
          <div>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
            <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
