// import { useEffect, useRef } from "react";
import styles from "./Styles.module.scss";
import Dialog from "./Dialog";
import Accordion from "./Accordion";

const Page = () => {
  return (
    <main className={styles.main}>
      <h1>
        <a href="https://www.radix-ui.com/docs/primitives/overview/introduction">
          Radix UI Primitives
        </a>
      </h1>
      <p>Try navigating with keyboard</p>

      <h3>Dialog</h3>
      <section>
        <Dialog />
      </section>
      <h3>Accordion</h3>
      <section>
        <Accordion />
      </section>

      <a href="#">The End</a>
    </main>
  );
};
export default Page;
