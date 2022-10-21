import styles from "./Styles.module.scss";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const LEN = 500; // Length of tail array
const diff = 8; // every Nth element is painted
let frame = 0;
let f = 0;

const tail = new Array(LEN).fill({ x: 0, y: 0 });
const mouse = { x: 0, y: 0 };

const Page = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };

  const draw = (p5) => {
    tail.push(mouse);
    if (tail.length > LEN) tail.shift();

    p5.background(0);
    p5.fill(0, 0, 0);
    p5.stroke(255, 0, 0);
    p5.strokeWeight(2);

    for (let i = frame; i < LEN; i++) {
      if (i % diff === 0) p5.ellipse(tail[i].x, tail[i].y, 50, 50);
    }
    let i = tail.length - 1;
    p5.ellipse(tail[i].x, tail[i].y, 50, 50);
  };

  const mouseMoved = (p5, event) => {
    mouse = {
      x: event.x,
      y: event.y,
    };
  };

  return (
    <main>
      <Sketch
        setup={setup}
        draw={draw}
        className={styles.canvas}
        mouseMoved={mouseMoved}
      />
      <p>following trail with p5 </p>
    </main>
  );
};
export default Page;
