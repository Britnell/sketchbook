import styles from "./Shadow.module.css";
import { useState, useEffect } from "react";

function Shadow({ children }) {
  const [mouse, setMouse] = useState({});

  useEffect(() => {
    const onMove = (ev) => {
      const MX = (ev.x / window?.innerWidth - 0.5) * 2;
      const MY = (ev.y / window?.innerHeight - 0.5) * 2;
      const mag = Math.sqrt(MX * MX + MY * MY);
      document.body.style.setProperty("--mx", MX);
      document.body.style.setProperty("--my", MY);
      document.body.style.setProperty("--mag", mag);

      // console.log(MX, MY);
      const factor = 50;

      const facB = 60;
      const B = {
        x: Math.floor(MX / facB),
        y: Math.floor(MY / facB),
      };
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <h1 className={styles.shadow}>Look AROUND you</h1>
      <p>alsdkjasldkj</p>
      <h1 className={styles.light}>The Rocky Horror Picture Show</h1>
    </>
  );
}

export default Shadow;
