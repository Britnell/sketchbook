import { useRef } from "react";
import styles from "./Perpective.module.scss";

const Page = () => {
  const containerRef = useRef();

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.scroll}>
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
    </div>
  );
};

export default Page;
