import styles from "./Rolling.module.css";

const Rolling = () => {
  return (
    <div className={styles.container}>
      <span className={styles.q1}>
        <span className={styles.q2}>
          <span className={styles.q3}>
            <span className={styles.q4}>B</span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Rolling;
