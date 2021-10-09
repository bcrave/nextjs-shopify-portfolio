import styles from "../styles/NavMenu.module.css";

const NavMenu = () => {
  return (
    <div className={styles.navMenu}>
      <a className={styles.navItem} href="">
        <p>home</p>
      </a>
      <a className={styles.navItem} href="">
        <p>about</p>
      </a>
      <a className={styles.navItem} href="">
        <p>contact</p>
      </a>
      <a className={styles.navItem} href="">
        <p>resume</p>
      </a>
    </div>
  );
};

export default NavMenu;
