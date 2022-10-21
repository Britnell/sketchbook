import styles from "./Styles.module.scss";
import { useRef, useState } from "react";

const useInput = ({ initialVal = 0 }) => {
  const [val, setVal] = useState(initialVal);

  const input = {
    state: [val, setVal],
    component: (props) => (
      <input value={val} onInput={(ev) => setVal(ev.target.value)} {...props} />
    ),
  };

  return input;
};

const WaveDemo = () => {
  const sizeInput = useInput({ initialVal: 20 });
  const curveInput = useInput({ initialVal: 20 });

  const [size] = sizeInput.state;
  const [curve] = curveInput.state;
  const R = Math.sqrt(size * size + curve * curve);

  return (
    <div className={styles.cont}>
      <div>
        <div>
          <label>Size : {size}px </label>
        </div>
        <div>
          <sizeInput.component type="range" min="20" max="200" />
        </div>
        <div>
          <label>Curve : {curve}px </label>
        </div>
        <div>
          <curveInput.component type="range" min="20" max="200" />
        </div>
      </div>
      <div
        style={{ "--size": `${size}px`, "--p": `${curve}px`, "--R": `${R}px` }}
        className={styles.p1}
      ></div>
    </div>
  );
};

const Page = () => {
  return (
    <main>
      <div>
        <h1>CSS wave </h1>
        <a href="https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/">
          from CSS tricks
        </a>
        <p>
          uses radial gradient to mask element only - background / other layers
          are uninterrupted
        </p>
      </div>
      <WaveDemo />
    </main>
  );
};
export default Page;
