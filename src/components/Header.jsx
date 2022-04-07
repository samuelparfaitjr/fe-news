import Logo from "./Logo";
import Navigation from "./Navigation";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <Logo title="News" icon="newspaper" />
      <Navigation />
    </header>
  );
};

export default Header;
