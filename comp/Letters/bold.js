import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

const C = ({ L }) => {
  const [weight, setWeight] = useState("regular");
  const ref = useRef();

  useEffect(() => {
    const over = () => setWeight("900");
    const leave = () => {
      setTimeout(() => setWeight("400"), randomInt(4000, 6000));
    };

    ref.current.addEventListener("mouseover", over);
    ref.current.addEventListener("mouseleave", leave);

    // return () => {
    //   ref.current.removeEventListener("mouseover", over);
    //   ref.current.removeEventListener("mouseleave", leave);
    // };
  }, []);

  return (
    <span style={{ fontWeight: weight }} ref={ref}>
      {L}
    </span>
  );
};

const Bold = ({ children }) => {
  let words = children.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span key={`p${i}`}>
          <span className={styles.bold}>
            {word.split("").map((letter, i) => (
              <C key={i} L={letter} />
            ))}
          </span>
          <span>&nbsp;</span>
        </span>
      ))}
    </>
  );
};

export default Bold;
