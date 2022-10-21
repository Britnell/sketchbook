import { useRef } from "react";
import styles from "./Styles.module.scss";
import { useScroller } from "css-var-animate";
import Newsletter from "./newsletter";
import Counter from "./Counter";

const Page = () => {
  return (
    <main>
      <h1>Test</h1>
      <div>
        <p>Lorem Ipsum dimsum pick some</p>
        <a href="/login">Login</a>
      </div>
      <Newsletter />
      <Counter />
    </main>
  );
};
export default Page;
