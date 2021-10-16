import dynamic from "next/dynamic";
import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Header = ({ scrollValue }) => {
  const [headerPosition, setHeaderPosition] = useState("static");
  const [prevScrollValue, setPrevScrollValue] = useState(scrollValue);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsVisible(prevScrollValue > scrollValue);
    setPrevScrollValue(scrollValue);
  };

  return (
    <div className={`${styles.header} ${!isVisible && styles.header__hidden}`}>
      <div className={styles.left}>
        brendon
        <br />
        crave
      </div>
      <div className={styles.right}>
        <ThemeToggle id={styles.button} />
      </div>
    </div>
  );
};

export default Header;
