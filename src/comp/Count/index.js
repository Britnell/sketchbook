import { useEffect, useRef, useState } from "react";
import styles from "./Count.module.scss";

const intvl = 0.02; // 5ms interval
// if (state.ref.current) state.ref.current.style.setProperty(name, x);

const useStraight = (ref) => {
  const timer = useRef();

  const start = (name = "--x", T = 1.0, unit = "") => {
    const steps = T / intvl;
    const perStep = 100 / steps;

    if (timer.current) {
      clearInterval(timer.current);
      timer.current = 0;
    }

    let x = 0;
    timer.current = setInterval(() => {
      x += perStep;
      if (x >= 100) {
        x = 100;
        clearInterval(timer.current);
      }
      if (ref.current) ref.current.style.setProperty(name, x + unit);
    }, intvl * 1000);
  };

  return { start };
};

const Count = () => {
  const ref = useRef();
  const ctr = useStraight(ref);

  const start = () => {
    // straight js counter
    ctr.start("--x", 1.0);
  };

  return (
    <div ref={ref}>
      <div>x</div>
      <h2>countup</h2>
      <button onClick={start}>Start</button>
      <div className={styles.bar}>
        <div></div>
      </div>
    </div>
  );
};

export default Count;

const useCounter = (ref, name) => {
  //
  const timer = useRef();

  const [state, setState] = useState({
    active: false,
  });

  const start = (T = 1.0) => {
    // using fixed period for framerate close to 60ps
    const steps = (T * 1000) / intvl;
    const magPerStep = 100 / steps;

    setState({ ...state, active: true, T, val: 0, mag: magPerStep });
  };

  useEffect(() => {
    console.log("\t<Counter ", state);
    if (!state.active) return;

    setTimeout(() => {
      console.log(" :t ", state);
    }, intvl);
  }, [state]);

  return { start };
};
