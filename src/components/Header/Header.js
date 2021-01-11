import { Navigation, Logo } from "../index";

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={ styles.header }>
      <Logo />
      <Navigation type={"header"} />
    </header>
  );
};

export default Header;
