import { useRef } from "react";
import styles from "./Styles.module.scss";
import { useScroller } from "css-var-animate";

const linearScale = (x, xmin, xmax, ymin, ymax) =>
  ymin + ((ymax - ymin) * (x - xmin)) / (xmax - xmin);

const Page = () => {
  const outlineScroll = useRef();

  useScroller({
    ref: outlineScroll,
    customVars: ({ top }) => {
      let v = linearScale(top, 0.5, 0.9, 0, 1);
      if (v < 0) v = 0;
      if (v > 1) v = 1;
      return { "--v": v };
    },
  });
  return (
    <main>
      <h1>Outline</h1>
      <div className={[styles.container, styles.one].join(" ")}>
        <h3>Classic svg outline animation</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle r="10" cx="20" cy="20" fill="red" />
          <text x="30" y="70" fontSize="90">
            a
          </text>
        </svg>
      </div>
      <div className={[styles.container, styles.two].join(" ")}>
        <h3>
          But there's{" "}
          <a href="https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/">
            A TRICK
          </a>{" "}
          to simplify this.
        </h3>
        <svg
          className={styles.animate_outline}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 255 350"
        >
          <path
            d="M233.678 71.693H21.9472L16.6373 143.376C16.6373 143.376 20.2879 143.376 27.2571 143.376C37.545 110.19 53.8065 84.9677 82.347 84.9677H99.6041V256.875C99.6041 277.782 93.6305 295.04 68.4086 295.04C68.4086 299.022 68.4086 304 68.4086 304H186.885C186.885 304 186.885 299.022 186.885 295.04C161.663 295.04 156.022 277.782 156.022 256.875V84.9677H173.279C201.819 84.9677 217.749 110.19 228.369 143.376C235.338 143.376 238.988 143.376 238.988 143.376L233.678 71.693Z"
            pathLength="1"
          />
          <circle pathLength="1" r="100" cx="125" cy="150" fill="red" />
          <text pathLength="1" x="165" y="345" fontSize="190">
            a
          </text>
        </svg>
        <p>
          Though this does not seem to work for svg {`<text>`} elements see the
          'a' - I converted the 'T' to a path.
        </p>
      </div>
      <div
        ref={outlineScroll}
        className={[styles.container, styles.outlineScroll].join(" ")}
      >
        <h3>So here is an outline on scroll</h3>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255 350">
          <path
            d="M233.678 71.693H21.9472L16.6373 143.376C16.6373 143.376 20.2879 143.376 27.2571 143.376C37.545 110.19 53.8065 84.9677 82.347 84.9677H99.6041V256.875C99.6041 277.782 93.6305 295.04 68.4086 295.04C68.4086 299.022 68.4086 304 68.4086 304H186.885C186.885 304 186.885 299.022 186.885 295.04C161.663 295.04 156.022 277.782 156.022 256.875V84.9677H173.279C201.819 84.9677 217.749 110.19 228.369 143.376C235.338 143.376 238.988 143.376 238.988 143.376L233.678 71.693Z"
            pathLength="1"
          />
        </svg>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </main>
  );
};
export default Page;
