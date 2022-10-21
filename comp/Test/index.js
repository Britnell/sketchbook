import { useRef } from "react";
import styles from "./Styles.module.scss";
import { useScroller } from "css-var-animate";

const Page = () => {
  return (
    <main>
      <h1>Test</h1>
      <p>Lorem Ipsum dimsum pick some</p>
      <a href="/login">Login</a>
    </main>
  );
};
export default Page;
