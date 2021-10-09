import dynamic from "next/dynamic";
import styles from "../styles/Header.module.css";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Header = () => {
  return (
    <div className={styles.header}>
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
