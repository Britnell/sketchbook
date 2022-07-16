import styles from "./Gradient.module.css";

const Gradient = () => {
  return (
    <main>
      <p>"animate" a gradient by animating "background-position"</p>
      <div className={styles.gradient}>Gradie</div>
      <p>gradient background text as per Kevin</p>
      <div className={styles.text}>
        CSS
        <br /> is
        <br /> AWESOME
      </div>
      <p>cut out text as per lea Verou</p>
      <div className={styles.cut}>
        <span className={styles.screen}>color screen</span>
        <span className={styles.mutliply}>color multiply</span>
      </div>
      <p>Using both to get other colours</p>
      <div className={styles.cut}>
        <span className={styles.white}>TEXT</span>
        <span className={styles.red}>TEXT</span>
      </div>
    </main>
  );
};
export default Gradient;
