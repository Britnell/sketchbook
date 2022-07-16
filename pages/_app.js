import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Layout.module.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Web dev sketchbook</title>
        <meta
          name="description"
          content="I'm a front-end web developer, and this is my sketchbook"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="gradient">gradient</Link>
            </li>
            <li>
              <Link href="count">count</Link>
            </li>
            <li>
              <Link href="letters">letters</Link>
            </li>
            <li>
              <Link href="pattern">pattern</Link>
            </li>
            <li>
              <Link href="rolling">rolling</Link>
            </li>
            <li>
              <Link href="scroller">scroller</Link>
            </li>
            <li>
              <Link href="secrets">secrets</Link>
            </li>
            <li>
              <Link href="shadow">shadow</Link>
            </li>
            <li>
              <Link href="transition">transition</Link>
            </li>
            <li>
              <Link href="perspective">perspective</Link>
            </li>
            <li>
              <Link href="perspective-two">perspective 2</Link>
            </li>
            <li>
              <Link href="perspective-scroll">perspective scroll</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
        Hi I'm Tommy and this is my web-development sketchbook to try out ideas.{" "}
        <a href="https://github.com/Britnell/sketchbook">
          This is the git repo /sketchbook
        </a>
        .
      </footer>
    </div>
  );
}

export default MyApp;
