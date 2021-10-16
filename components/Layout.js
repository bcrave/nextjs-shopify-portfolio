import { useEffect, useState } from "react";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    setScrollValue(window.scrollY);
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("removed event listener");
      });
    };
  }, []);
  return (
    <div className="layout">
      <Header scrollValue={scrollValue} />
      <ProgressBar scrollValue={scrollValue} />
      {children}
      <NavMenu />
      <Footer />
    </div>
  );
};

export default Layout;
