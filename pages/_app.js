import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Layout.module.scss";
import "../styles/globals.css";
import "../styles/resets.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pages = [
    "gradient",
    "count",
    "letters",
    "pattern",
    "rolling",
    "secrets",
    "shadow",
    "transition",
    "perspective",
    "perspective-two",
    "perspective-scroll",
    "navbar",
    "tooltip",
    "moresecrets",
    "clamp",
    "outline",
    "variable",
    // "textform",
    "followgrid",
    "follow",
    "radix",
    "woah",
    "skeleton",
    "warp",
  ];

  const page = router?.route?.slice(1);
  const capitalise = (str) => str[0].toUpperCase() + str.slice(1);

  const gitUrl = page
    ? `https://github.com/Britnell/sketchbook/blob/main/comp/${capitalise(
        page
      )}/index.js`
    : "https://github.com/Britnell/sketchbook";
  return (
    <div>
      <Head>
        <title>Web dev sketchbook</title>
        <meta
          name="description"
          content="I'm a front-end web developer, and this is my sketchbook"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.layout}>
        <nav>
          <ul>
            {pages.map((page) => (
              <li key={page}>
                <Link href={page}>{page}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
        <div>
          <p>
            Hi I'm Tommy and this is my web-development sketchbook to try out
            ideas. <a href={gitUrl}>Find the code in the git repo</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
