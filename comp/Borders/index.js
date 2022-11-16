import styles from "./Styles.module.scss";
import { useMouseover } from "css-var-animate";
import { useRef } from "react";
import Link from "next/link";

const Follow = () => {
  const ref = useRef();
  useMouseover(ref);

  return (
    <main className={styles.container}>
      <div>
        <h1>Fancy Borders</h1>
        <p>
          I'm seeing fancy borders everywhere recently, so I wanted to go try
          out different ways on this again and see what we can do
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
            As I tried out in{" "}
            <Link href="/secrets">
              <a>/Secrets</a>
            </Link>{" "}
            Lea Verou has a clever way of achieving this - with a transparent
            border. and using two gradients in the background with 'padding-box'
            and 'border-box' properties.
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
        <div>
          <p>
            now lets get fancy with the border - now we can use a radial
            gradient and make it follow the mouse with this handy little package
            I happen to know{" "}
            <a
              href="https://github.com/Britnell/css-var-animate"
              target="_blank"
              rel="noreferrer"
            >
              css-var-animate
            </a>
          </p>
          <button ref={ref} className={styles.b5}>
            EHMET
          </button>
        </div>
      </div>
    </main>
  );
};

export default Follow;
