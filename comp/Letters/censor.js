import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

const C = ({ L }) => {
  const [letter, setLetter] = useState(L);
  const [hide, setHide] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const over = () => {
      // setLetter("_");
      setHide(true);
    };
    const leave = () => {
      setTimeout(() => {
        // setLetter(L);
        setHide(false);
      }, randomInt(600, 1200));
    };

    ref.current.addEventListener("mouseover", over);
    ref.current.addEventListener("mouseleave", leave);

    // return () => {
    //   ref.current.removeEventListener("mouseover", over);
    //   ref.current.removeEventListener("mouseleave", leave);
    // };
  }, []);

  return (
    <span
      ref={ref}
      style={{
        backgroundColor: hide ? "#000" : "#fff",
      }}
    >
      {letter}
    </span>
  );
};

const Censor = ({ children }) => {
  let words = children.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className={styles.censor}>
            {word.split("").map((letter, i) => (
              <C key={`L${i}`} L={letter} />
            ))}
          </span>
          <span>&nbsp;</span>
        </span>
      ))}
    </>
  );
};

export default Censor;
