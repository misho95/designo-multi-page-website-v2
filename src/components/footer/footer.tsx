import AnimatedFooter from "./animated-footer";
import Logo from "../shared/logo";
import Navigation from "../shared/navigation";
import Separator from "../shared/separator";
import Icons from "./icons";
import GetInTouch from "./get-in-touch";

const Footer = () => {
  return (
    <AnimatedFooter>
      <footer className="relative flex items-center justify-center bg-BLACK pb-[64px] pt-[253px] text-white sm:pb-[83px] sm:pt-[166px] lg:pb-[72px] lg:pt-[144px]">
        <GetInTouch />
        <div className="flex w-[77.15%] max-w-[1111px] flex-col gap-10">
          <div className="flex flex-col items-center justify-between gap-[40px] md:flex-row md:gap-5">
            <Logo type="light" />
            <div className="w-full md:hidden">
              <Separator type="light" />
            </div>
            <Navigation type="light" />
          </div>
          <div className="hidden w-full sm:block">
            <Separator type="light" />
          </div>
          <div className="flex flex-col items-center justify-between gap-[40px] text-center leading-[26px] text-white/50 sm:flex-row sm:items-start sm:text-left">
            <p>
              <span className="font-bold">Designo Central Office</span>
              <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
            <p>
              <span className="font-bold">Contact Us (Central Office)</span>
              <br />
              P : +1 253-863-8967
              <br />M : contact@designo.co
            </p>
            <Icons />
          </div>
        </div>
      </footer>
    </AnimatedFooter>
  );
};

export default Footer;
