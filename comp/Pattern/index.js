import styles from "./Pattern.module.scss";

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
        <p>different size + offset</p>
        <div className={styles.lines}></div>
      </div>
    </main>
  );
};

export default Pattern;
