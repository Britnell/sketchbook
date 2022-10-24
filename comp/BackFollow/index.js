import { useMouseover } from "css-var-animate";
import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";
// import { useMouseover } from "css-var-animate";

const Follow = () => {
  const refOne = useRef(null);
  const refTwo = useRef(null);

  useEffect(() => {
    const listen = (ev) => {
      const x = ev.x;
      const y = ev.y;
      ev.currentTarget.style.setProperty("--mx", x);
      ev.currentTarget.style.setProperty("--my", y);
    };
    if (refOne.current) refOne.current.addEventListener("mousemove", listen);
    // if (refTwo.current) refTwo.current.addEventListener("mousemove", listen);
    return () => {
      refOne.current && refOne.current.removeEventListener("mousemove", listen);
      // refTwo.current && refTwo.current.removeEventListener("mousemove", listen);
    };
  }, [refOne, refTwo]);

  useMouseover(refTwo);

  return (
    <main>
      <h2 className={styles.head}>
        Animated backgrounds with gradients <br />
        that follow mouse position (Two examples)
      </h2>
      <div className={styles.backgrad} ref={refOne}>
        <div className={styles.cont}>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.box}>
            <h2>Newsletter signup</h2>
            <input type="text" placeholder="youremail@here" />
            <button>Submit</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <h2 className={styles.head}>Combine radial with conic gradient </h2>
      <div className={styles.radial} ref={refTwo}>
        <div className={styles.cont}>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.box}>
            <h2>Newsletter signup</h2>
            <input type="text" placeholder="youremail@here" />
            <button>Submit</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Follow;
