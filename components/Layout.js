import { useEffect, useState } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);
  const [prevScrollValue, setPrevScrollValue] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    setScrollValue(window.scrollY);
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollValue(window.scrollY);
      });
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, [scrollValue]);

  const handleScroll = () => {
    setIsFixed(prevScrollValue > scrollValue);
    setPrevScrollValue(scrollValue);
  };

  return (
    <div className="layout">
      <LayoutContext.Provider value={{ scrollValue, isFixed }}>
        <Header />
        <ProgressBar scrollValue={scrollValue} />
        {children}
        <NavMenu />
        <Footer />
      </LayoutContext.Provider>
    </div>
  );
};

export default Layout;
