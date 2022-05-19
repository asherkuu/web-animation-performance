import { useState } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Navigation from "../src/components/Navigation";

export default function Home() {
  const [target, setTarget] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Web Animation Performance</title>
        <meta name="description" content="Web Animation Performance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>main</main>
    </div>
  );
}
