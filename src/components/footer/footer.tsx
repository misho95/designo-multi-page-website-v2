import AnimatedFooter from "./animated-footer";
import Logo from "../shared/logo";
import Navigation from "../shared/navigation";
import Separator from "../shared/separator";
import Icons from "./icons";
import GetInTouch from "./get-in-touch";

const Footer = () => {
  return (
    <AnimatedFooter>
      <footer className="bg-BLACK text-white relative pt-[253px] pb-[64px] sm:pt-[166px] sm:pb-[83px] lg:pt-[144px] lg:pb-[72px] flex justify-center items-center">
        <GetInTouch />
        <div className="max-w-[1111px] w-[77.15%] flex flex-col gap-10 ">
          <div className="flex flex-col md:flex-row justify-between gap-[40px] md:gap-5 items-center">
            <Logo type="light" />
            <div className="w-full md:hidden">
              <Separator type="light" />
            </div>
            <Navigation type="light" />
          </div>
          <div className="hidden sm:block w-full">
            <Separator type="light" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left text-white/50 leading-[26px] gap-[40px]">
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
