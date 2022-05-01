import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";

const charCodes = {
  large: [
    35, 36, 37, 38, 63, 64, 162, 163, 165, 169, 171, 172, 188, 189, 190, 191,
  ],
  medium: [33, 40, 41, 43, 47, 60, 61, 62, 91, 92, 93, 123, 124, 125, 174, 187],
  small: [
    34, 39, 42, 44, 45, 46, 58, 59, 94, 95, 96, 126, 168, 176, 175, 178, 179,
    180, 184, 185,
  ],
  number: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
  lower: [
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
  ],
  upper: [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90,
  ],
};

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));
const randomLetter = (list) => list[Math.floor(Math.random() * list.length)];

const G = ({ L }) => {
  const [letter, setLetter] = useState(L);
  const [morph, setMorph] = useState([]);
  //   const [animating, setAnimating] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const over = () => {
      const list = [];

      const addLetters = (min, max, from) => {
        let N = randomInt(min, max); // large
        for (let n = 0; n < N; n++) {
          list.push(randomLetter(from));
        }
      };

      // addLetters(1, 1, charCodes.upper);
      // addLetters(1, 1, charCodes.lower);
      addLetters(2, 3, charCodes.number);
      // addLetters(1, 1, charCodes.large);
      addLetters(3, 5, charCodes.medium);
      addLetters(8, 14, charCodes.small);

      setMorph(list);
    };

    ref.current.addEventListener("mouseover", over);

    return () => ref.current.removeEventListener("mouseover", over);
  }, []);

  useEffect(() => {
    if (morph.length == 0) {
      setLetter(L);
      return;
    }

    setTimeout(() => {
      setLetter(String.fromCharCode(morph[0]));
      setMorph(morph.slice(1));
    }, randomInt(300, 300));
  }, [morph]);

  return <span ref={ref}>{letter}</span>;
};

const Glitch = ({ children }) => {
  let words = children.split(" ");
  // const words = ["Lorem", "ipsum", "dolor"];

  return (
    <>
      {words.map((word, i) => (
        <span key={`p${i}`}>
          <span className={styles.glitch}>
            {word.split("").map((letter, i) => (
              <G key={`L${i}`} L={letter} />
            ))}
          </span>
          <span>&nbsp;</span>
        </span>
      ))}
    </>
  );
};
export default Glitch;
