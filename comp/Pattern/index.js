import styles from "./Pattern.module.css";

const Pattern = () => {
  return (
    <main>
      <div className={styles.container}>
        <p>{"Test - SVG : circle & text"}</p>
        <div className={styles.p1}></div>
        <p>SVG line w rotation</p>
        <div className={styles.p2}></div>
        <p>double background image url + background-size</p>
        <div className={styles.p3}></div>
        <p>Animated background grad</p>
        <div className={styles.dots}></div>
      </div>
    </main>
  );
};

export default Pattern;
