import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Layout.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My web dev sketchbook</title>
        <meta name="description" content="My front end dev sketchbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
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
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
