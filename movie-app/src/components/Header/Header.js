import { Navigation, Logo } from "../index";

const Header = () => {
  return (
    <header className={"header"}>
      <Logo />
      <Navigation type={"header"} />
    </header>
  );
};

export default Header;
