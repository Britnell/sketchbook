import styles from "./Rotating.module.css";

function Rotating() {
  return (
    <div className={styles.container}>
      <div className={styles.cube}>
        <div className={styles.front}>F</div>
        <div className={styles.back}>B</div>
        <div className={styles.left}>L</div>
        <div className={styles.right}>R</div>
        <div className={styles.top}>T</div>
        <div className={styles.bottom}>B</div>
      </div>
    </div>
  );
}

export default Rotating;
