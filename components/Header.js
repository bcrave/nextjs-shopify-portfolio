import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

import Link from "next/link";
import dynamic from "next/dynamic";

import styles from "../styles/Header.module.css";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Header = () => {
  const { isFixed } = useContext(LayoutContext);
  return (
    <div className={`${styles.header} ${isFixed && styles.header__fixed}`}>
      <div className={styles.left}>
        <Link href="/">
          <a>
            brendon
            <br />
            crave
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        <ThemeToggle id={styles.button} />
      </div>
    </div>
  );
};

export default Header;
