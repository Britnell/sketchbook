import styles from "./Carousel.module.css";
import { useRef } from "react";

const getRotation = (css) => {
  const re = /(\w+)\((.+?)\)/;
  const m = re.exec(css);
  if (!m) return 0;
  if (m[1] !== "rotateY") return 0;

  let r = m[2].split("deg")[0];

  return parseInt(r);
};

const Carousel = () => {
  const cubeRef = useRef();

  const spin = () => {
    const rot = getRotation(cubeRef.current.style.transform);
    console.log(rot);
    cubeRef.current.style.transform = `rotateY(${rot + 90}deg)`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cube} ref={cubeRef} onClick={spin}>
        <div className={styles.front}>
          <div>FRONT</div>
          <div>"[ CLICK ME ]"</div>
          <div>FRONT</div>
        </div>
        <div className={styles.back}>
          <div>BACK</div>
          <div>BACK</div>
          <div>BACK</div>
        </div>
        <div className={styles.left}>
          <div>LEFT</div>
          <div>LEFT</div>
          <div>LEFT</div>
          <div>LEFT</div>
        </div>
        <div className={styles.right}>
          <div>RIGHT</div>
          <div>RIGHT</div>
          <div>RIGHT</div>
          <div>RIGHT</div>
        </div>
        <div className={styles.top}>
          <div>TOP</div>
          <div>TOP</div>
          <div>TOP</div>
          <div>TOP</div>
        </div>
        <div className={styles.bottom}>
          <div>BOTTOM</div>
          <div>BOTTOM</div>
          <div>BOTTOM</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
