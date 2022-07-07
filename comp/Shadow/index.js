import styles from "./Shadow.module.css";
import { useState, useEffect } from "react";

export default function Page() {
  return (
    <div>
      <Shadow>Look AROUND you</Shadow>
    </div>
  );
}
function Shadow({ children }) {
  const [mouse, setMouse] = useState({});
  //   const [pos, setPos] = useState({});

  useEffect(() => {
    const move = (ev) => {
      setMouse({
        x: ev.x,
        y: ev.y,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const vX = mouse.x - window.innerWidth / 2;
  const vY = mouse.y - window.innerHeight / 2;

  const fact = 50;
  const A = {
    x: Math.floor(vX / fact),
    y: Math.floor(vY / fact),
  };

  const facB = 60;
  const B = {
    x: Math.floor(vX / facB),
    y: Math.floor(vY / facB),
  };
  const blur = Math.sqrt(vX * vX + vY * vY) / 50;

  return (
    <>
      <h1
        style={{
          position: "relative",
          textShadow: `${-A.x}px ${-A.y}px black`,
          left: `${A.x}px`,
          top: `${A.y}px`,
        }}
        className={styles.shadow}
      >
        {children}
      </h1>
      <p>alsdkjasldkj</p>
      <h1
        style={{
          position: "relative",
          textShadow: `${-B.x}px ${-B.y}px ${blur}px black`,
          //   left: `${B.x}px`,
          //   top: `${B.y}px`,
        }}
        className={styles.shadow}
      >
        The Rocky Horror Picture Show
      </h1>
    </>
  );
}
