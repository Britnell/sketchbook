import styles from "./Style.module.css";

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.autoMargin}>
        <h1>I am max width 100px</h1>
        <h4>centered with margin auto</h4>
      </div>
      <div className={styles.calcMargin}>
        <h2>I am calculating margin with </h2>
        <h4>calc((100vw - 1000px) / 2 )</h4>
      </div>
      <div className={styles.calcPerc}>
        <h2>I am calculating margin with </h2>
        <h4>calc((100% - 1000px) / 2 )</h4>
      </div>
    </div>
  );
}
