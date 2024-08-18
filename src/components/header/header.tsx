import Logo from "@/components/shared/logo";
import Navigation from "@/components/shared/navigation";
import AnimatedHeader from "@/components/header/aniamted-header";
import BurgerMenu from "@/components/header/burger-menu";

const Header = () => {
  return (
    <AnimatedHeader>
      <div className="flex justify-center">
        <header className="flex w-full max-w-[1111px] items-center justify-between bg-white/80 px-[24px] py-[37px] backdrop-blur-sm sm:w-[89.71354166666667%] sm:px-0 sm:py-[64px] lg:w-[77.15%]">
          <Logo type="dark" />
          <div className="hidden sm:block">
            <Navigation type="dark" />
          </div>
          <div className="sm:hidden">
            <BurgerMenu />
          </div>
        </header>
      </div>
    </AnimatedHeader>
  );
};

export default Header;
