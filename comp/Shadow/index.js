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
      document.body.style.setProperty("--absx", Math.abs(MX));
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
    <main>
      <h1 className={styles.shadow}>Look AROUND you</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1 className={styles.light}>The Rocky Horror Picture Show</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className={styles.throw}>
        <h1 className={styles.shade}>STAR WARS</h1>
        <h1 className={styles.letter}>STAR WARS</h1>
      </div>
    </main>
  );
}

export default Shadow;
