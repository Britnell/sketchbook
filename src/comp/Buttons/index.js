import React from "react";

import styles from "./ButtonTest.module.css";
import buttonstyles from "./Buttons.module.css";

// * 3 D - B U T T O N
function Button3D({ onClick }) {
  return (
    <div>
      <button
        className={buttonstyles.button}
        onClick={(ev) => {
          if (onClick) onClick(ev);
        }}
      >
        CLACK
      </button>
    </div>
  );
}

export default function Page() {
  // const click = () => console.log(" CLICK ");
  return (
    <>
      <div className={styles.container}>
        <div>
          Reference :{" "}
          <a href="https://codepen.io/screenthink/pen/ZeOyjP">codepen</a>
        </div>
        <div className={styles.btn}>mousedown</div>

        <div>My copy</div>
        <div className={styles.mybutton}>mousedown</div>

        <div>CSS box</div>

        <div>
          <div className={styles.box}>FRONT FRONT FRONT</div>
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "60px",
              backgroundColor: "blue",
              transformOrigin: "top right",
              transform: "translate(-20px) skew(0deg,-45deg)",
            }}
          >
            B
          </div>
          <div
            style={{
              position: "relative",
              width: "60px",
              height: "20px",
              backgroundColor: "red",
              transformOrigin: "top right",
              transform: "translate(0,60px) skew(-45deg,0deg) ", //skew(0deg,-45deg)
            }}
          >
            bottom
          </div>
        </div>

        <h4>Comp</h4>
        <Button3D />
      </div>
    </>
  );
}

//--
