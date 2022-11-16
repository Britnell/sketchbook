import styles from "./Styles.module.scss";
import { useMouseover } from "css-var-animate";
import { useRef } from "react";

const Follow = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1>Clippath</h1>
      </div>
      <div className={styles.grid}>
        <div>
          <p>
            As i discovered previously in <a href="secrets">Secrets</a>, clip
            paths can be animated. This is really cool, though practically only
            when we define them as a polygon, hence they have to be edgey
            shapes. (or do they?) - still we can achieve some nice effects with
            this
          </p>
        </div>
        <div className={styles.p1}></div>
        <div>
          <p>
            For example I recently saw a nice use of this as a shifting polygon{" "}
          </p>
        </div>
        <div className={styles.p2}></div>
      </div>
    </main>
  );
};

export default Follow;
