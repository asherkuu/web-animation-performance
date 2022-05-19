import React from "react";
import Navigation from "../src/components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navigation />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
