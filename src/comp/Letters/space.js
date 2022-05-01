import { useEffect, useRef, useState } from "react";
import styles from "./Letters.module.css";

const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min));

const S = ({ word }) => {
  const ref = useRef();

  useEffect(() => {
    const over = (ev) => {
      const span = ev.target;
      const p = span.parentElement.parentElement;
      let spacer, hoverIndex, spacerIndex;

      Array.from(p.childNodes).forEach((node, i) => {
        if (node.firstChild === span) {
          hoverIndex = i;
        }
        if (node.className === "spacer") {
          spacer = node;
          spacerIndex = i;
        }
      });

      // console.log(node);

      spacer.textContent = span.textContent;
      span.parentElement.insertAdjacentElement(
        hoverIndex < spacerIndex ? "beforebegin" : "afterend",
        spacer
      );
      // p.insertBefore(spacer, span);
    };

    ref.current.addEventListener("mouseover", over);

    // return () => ref.current.removeEventListener("mouseover", over);
  }, []);

  return <span ref={ref}>{word}</span>;
};

const Space = ({ children }) => {
  let words = children.split(" ");

  return (
    <span>
      {words.map((word, i) => (
        <span key={i}>
          <S word={word} />
          <span> </span>
        </span>
      ))}
      <span style={{ color: "#fff" }} className="spacer"></span>
    </span>
  );
};

export default Space;
