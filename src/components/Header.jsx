import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Logo title="News" icon="newspaper" />
      <Navigation />
    </header>
  );
};

export default Header;
