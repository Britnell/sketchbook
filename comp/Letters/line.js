import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

const C = ({ L }) => {
  const [letter, setLetter] = useState(L);
  const ref = useRef();

  useEffect(() => {
    const over = () => {
      setLetter(L.toUpperCase());
    };

    ref.current.addEventListener("mouseover", over);

    return () => {
      ref.current.removeEventListener("mouseover", over);
    };
  }, []);

  return <span ref={ref}>{letter}</span>;
};

const Line = ({ children }) => {
  let words = children.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span key={`p${i}`}>
          <span key={`C${i}`} className={styles.line}>
            {word.split("").map((letter, i) => (
              <C key={`L${i}`} L={letter} />
            ))}
          </span>
          <span key={`space${i}`}> </span>
        </span>
      ))}
    </>
  );
};

export default Line;
