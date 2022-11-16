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
            As i discovered previously in <a href="secrets">CSS Secrets</a>,
            clip paths can be animated. This is really cool, though practically
            only when we define them as a polygon, hence they have to be edgey
            shapes. (or do they?) - still we can achieve some nice effects with
            this
          </p>
        </div>
        <div className={styles.p1}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>
        <div>
          <p>edge-y shapes work great</p>
        </div>
        <div className={styles.p6}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>
        <div>
          <p>But we can make nice curtain effects, here's one i made earlier</p>
        </div>
        <div className={styles.p2}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>

        <div>
          <p>Double curtain??</p>
        </div>
        <div className={styles.p7}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>

        <div>
          <p>
            For example I recently saw a nice use of this as a shifting polygon{" "}
          </p>
        </div>
        <div className={styles.p3}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>
        <div>
          <p>
            If we are just cliping a rectangular cutout we can use 'inset' which
            also allows us to use 'rounded' for corner radi
          </p>
        </div>
        <div className={styles.p4}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>
        <div>
          <p>which we can use to go from square to round</p>
        </div>
        <div className={styles.p5}>
          <img
            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="test image"
          />
        </div>
      </div>
    </main>
  );
};

export default Follow;
