import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="top-0 sticky flex justify-between items-center my-[64px]">
      <Logo type="dark" />
      <Navigation type="dark" />
    </header>
  );
};

export default Header;
