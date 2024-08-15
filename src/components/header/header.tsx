import Logo from "../shared/logo";
import Navigation from "../shared/navigation";
import AnimatedHeader from "./aniamted-header";
import BurgerMenu from "./burger-menu";

const Header = () => {
  return (
    <AnimatedHeader>
      <div className="flex justify-center">
        <header className="flex justify-between items-center py-[37px] sm:py-[64px] bg-white/80 backdrop-blur-sm px-[24px] sm:px-0 max-w-[1111px] w-full sm:w-[89.71354166666667%] lg:w-[77.15%]">
          <Logo type="dark" />
          <div className="hidden sm:block">
            <Navigation type="dark" />
          </div>
          <div className=" sm:hidden">
            <BurgerMenu />
          </div>
        </header>
      </div>
    </AnimatedHeader>
  );
};

export default Header;
