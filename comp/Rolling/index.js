import { useRef } from "react";
import styles from "./Rolling.module.css";

const Rolling = () => {
  const transRef = useRef();
  const intoRef = useRef();

  return (
    <div>
      <p>v1 rolling letter w animation on nested spans</p>
      <div className={styles.container}>
        <span className={styles.q1}>
          <span className={styles.q2}>
            <span className={styles.q3}>
              <span className={styles.q4}>B</span>
            </span>
          </span>
        </span>
      </div>
      <p>v2 - using transition and no classes</p>
      <div
        ref={transRef}
        className={[styles.transition, styles.lowercase_].join(" ")}
        onMouseEnter={() => transRef.current.classList.add(styles.over)}
        onMouseLeave={() => transRef.current.classList.remove(styles.over)}
      >
        <span>
          <span>
            <span>
              <span>B</span>
            </span>
          </span>
        </span>
      </div>

      <p>v3 roll into position</p>
      <div
        ref={intoRef}
        className={styles.into}
        onMouseEnter={() => intoRef.current.classList.add(styles.over)}
        onMouseLeave={() => intoRef.current.classList.remove(styles.over)}
      >
        <span>
          <span>
            <span>
              <span>B</span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Rolling;
