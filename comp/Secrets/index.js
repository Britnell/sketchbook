import styles from "./Secrets.module.css";

const Secrets = () => {
  return (
    <main>
      <h1>CSS Secrets - L.V. - notes</h1>
      <h3>Gradient Patterns</h3>
      <div className={styles.patterns}>
        <div>
          <p></p>
          <div className={styles.p1}></div>
        </div>
        <div className={styles.p2}></div>
        <div>
          <p>45 degree</p>
          <div className={styles.p3}></div>
        </div>
        <div>
          <p>repeating-linear-gradient</p>
          <div className={styles.p4}></div>
        </div>
        <div>
          <p>single color / transparency </p>
          <div className={styles.p5}></div>
        </div>
        <div>
          <p>anim w background-position </p>
          <div className={styles.p5b}></div>
        </div>

        <div>
          <p>Cut off corner using gradient</p>
          <div className={styles.c1}>
            <p>LOREM ipsum dimusn trixus flixbus</p>
          </div>
        </div>

        <div>
          <p>Animate corners</p>
          <button className={styles.c2}>CLICK ACTION</button>
        </div>

        <div>
          <p>Both corners</p>
          <button className={styles.c3}>Double things</button>
        </div>

        <div>
          <p>rising button</p>
          <button className={styles.c4}>Rise Up</button>
        </div>

        <div>
          <div className={styles.p6}></div>
        </div>
        <div>
          <div className={styles.p7}></div>
        </div>
        <div>
          <div className={styles.p8}></div>
        </div>
        <div>
          <div className={styles.p9}></div>
        </div>
        <div>
          <div className={styles.p10}></div>
        </div>
      </div>
      <div className={styles.patterns}>
        <h3>Border patterns</h3>
        <div>
          <div className={styles.b1}></div>
        </div>
        <div>
          <div className={styles.b2}></div>
        </div>
        <div>
          <div className={styles.b3}></div>
        </div>
      </div>

      <div>
        <h3>Skew'd</h3>
        <div>
          <button className={styles.sk1}>
            <span>COol Link</span>
          </button>
          <button className={styles.sk2}>Even cooler</button>
        </div>
      </div>
      <div>
        <h3>Clip Path</h3>
        <p>
          CAN BE ANIMATED - as long as its the same type e.g. polygon w same
          number of points
        </p>
        <div className={styles.clip}></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum maximus libero, in ornare nunc tincidunt sit amet. Ut efficitur
        maximus molestie. Phasellus sed egestas elit, sed pharetra erat. Vivamus
        et facilisis dui. Etiam id neque quis sapien rutrum vulputate vitae sit
        amet tellus. Morbi a feugiat erat, at finibus dui. Fusce feugiat eros in
        ex mattis tempus. Suspendisse ullamcorper tellus at est tempor,
        tristique egestas neque hendrerit. Nunc massa leo, sodales at nisl
        finibus, porta sagittis magna. Nunc ultrices rutrum viverra.
      </p>
    </main>
  );
};

export default Secrets;
