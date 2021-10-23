import { useRouter } from "next/router";
import Link from "next/link";

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
      <div
        className={router.pathname === "/portfolio" ? `${styles.active}` : ""}
      >
        <Link href="/portfolio">
          <a className={styles.navItem}>
            <p className={styles.p}>portfolio</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
