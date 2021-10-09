import "../styles/globals.css";
import "../styles/ProgressBar.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    setScrollValue(window.scrollY);
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
  }, []);
  return (
    <Layout scrollValue={scrollValue}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
