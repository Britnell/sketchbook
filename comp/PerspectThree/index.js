import { useEffect, useRef } from "react";
import useScroller from "../lib/useScroller";
import styles from "./Perpective.module.scss";

const Page = () => {
  const scrollRef = useRef();

  useScroller([
    {
      ref: scrollRef,
    },
  ]);

  // useEffect(() => {
  //   const mouse = (ev) => {
  //     if (!scrollRef.current) return;
  //     const y = ev.clientY / window.innerHeight;
  //     scrollRef.current.style.setProperty("--my", y.toString());
  //   };
  //   window.addEventListener("mousemove", mouse);
  //   () => window.removeEventListener("mousemove", mouse);
  // }, [scrollRef]);

  return (
    <main>
      <div className={styles.header}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>
      </div>
      <div ref={scrollRef} className={styles.page}>
        <div className={styles.container}>
          <div className={styles.perspective}>
            <div className={styles.slider}>
              <div className={styles.part}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className={styles.box}></div>
              <div className={styles.buttons}>
                <div>
                  <h3>asdasdlkasdja kdlajsldk jasdlkj as</h3>
                  <button>{"<3 Like "}</button>
                </div>
              </div>
              <div>
                <div className={styles.part}>
                  <h2>
                    Quick Brown Fox Jumps Over Lazy Dog Quick Brown Fox Jumps
                    Over Lazy Dog Quick Brown Fox Jumps Over Lazy Dog Quick
                    Brown Fox Jumps Over Lazy Dog Quick Brown Fox Jumps Over
                    Lazy Dog
                  </h2>
                </div>
              </div>
              <div className={styles.box}></div>
              <div>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
                <h1>Quick Brown Fox Jumps Over Lazy Dog</h1>
              </div>
              <div className={styles.box}></div>
              <div className={styles.part}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
