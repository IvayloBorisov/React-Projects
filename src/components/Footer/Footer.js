import { Navigation } from "../index";
import { Search } from "../index";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles['footer-title']}>
          <h1>ARE YOU A MOVIE ADDICT?</h1>
          <p className={styles.subtitle}>Feel free to search your favorite movies</p>
          <Search />
        </div>
        <Navigation type={"footer"} />
      </div>
      <p className={styles['footer-end']}>© 2021 Movie Addict</p>
    </footer>
  );
};

export default Footer;
