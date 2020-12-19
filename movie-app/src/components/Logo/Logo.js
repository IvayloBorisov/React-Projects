import { Link } from "react-router-dom";
import logoImage from '../../images/19505.jpg';

import styles from './Logo.module.css';

const Logo = () => {

  return (
    <div className={ styles.container }>
      <img className={ styles.image } src={ logoImage } alt="logo" />
      <Link className={ styles.link } to="/" >movieaddict</Link>
    </div>
  );
};

export default Logo;
