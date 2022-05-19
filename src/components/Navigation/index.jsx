import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <Head>
        <title>Web Animation Performance</title>
        <meta name="description" content="Web Animation Performance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navigation}>
        <Link href="/">Main</Link>
        <Link href="/animation">Animation</Link>
      </div>
    </div>
  );
};

export default Navigation;
