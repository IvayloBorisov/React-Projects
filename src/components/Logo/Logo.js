import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <span className={styles.title}>movie</span>addict
      </Link>
    </div>
  );
};

export default Logo;
