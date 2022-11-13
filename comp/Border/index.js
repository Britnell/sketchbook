import styles from "./Styles.module.scss";

const Follow = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1>Fancy Borders</h1>
        <p>
          Fancy Borders are all the rage now it seems, so I wanted to go through
          this again, and try out different ways to do this
        </p>
      </div>
      <div className={styles.grid}>
        <div>
          <p>
            v1, as css-tricks suggests, use 'border-image' - this is nice and
            simple but doesn't work with 'border-radius'{" "}
          </p>
          <button className={styles.b1}>LOREM</button>
        </div>
        <div>
          <p>
            As I tried out in /secrets Lea Verou has a clever way of achieving
            this - with a transparent border. and using two linear gradients on
            the background using 'padding-box' and 'border-box' properties.
          </p>
          <button className={styles.b2}>IPSUM</button>
        </div>
        <div>
          <p>
            this is cool as it uses the 'linear-gradient' which we can also
            animate
          </p>
          <button className={styles.b3}>DOLOR</button>
        </div>
        <div>
          <p>
            lets try that with a repeating gradient that goes in one direction
          </p>
          <button className={styles.b4}>SI AHMET</button>
        </div>
      </div>
    </main>
  );
};

export default Follow;
