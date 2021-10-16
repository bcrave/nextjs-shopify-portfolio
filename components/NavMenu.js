import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/NavMenu.module.css";

const NavMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.navMenu}>
      <div className={router.pathname === "/" ? `${styles.active}` : ""}>
        <Link href="/">
          <a className={styles.navItem}>
            <p className={styles.p}>home</p>
          </a>
        </Link>
      </div>
      <div className={router.pathname === "/about" ? `${styles.active}` : ""}>
        <Link href="/about">
          <a className={styles.navItem}>
            <p className={styles.p}>about</p>
          </a>
        </Link>
      </div>
      <div className={router.pathname === "/contact" ? `${styles.active}` : ""}>
        <Link href="/contact">
          <a className={styles.navItem}>
            <p className={styles.p}>contact</p>
          </a>
        </Link>
      </div>
      <div className={router.pathname === "/resume" ? `${styles.active}` : ""}>
        <Link href="/resume">
          <a className={styles.navItem}>
            <p className={styles.p}> resume</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
