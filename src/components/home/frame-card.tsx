import { Button } from "@/components/shared/button";
import HeroPhone from "@/assets/home/desktop/image-hero-phone.webp";
import HeroPattern from "@/assets/home/desktop/bg-pattern-hero-home.svg";

const FrameCard = () => {
  return (
    <div className="relative grid grid-rows-2 overflow-hidden bg-PEACH px-[24px] py-[80px] text-white sm:rounded-[15px] sm:px-[95px] sm:py-[145px] lg:grid-cols-2 lg:grid-rows-1">
      <div className="z-[30] flex flex-col items-center gap-[40px] text-center lg:items-start lg:text-left">
        <h1 className="text-[32px] font-medium leading-[36px] sm:text-[48px] sm:leading-[48px]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-[15px] leading-[25px] sm:text-[16px] sm:leading-[26px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button>learn more</Button>
      </div>

      <div
        className="absolute left-1/2 top-[40%] h-[913px] w-[624px] -translate-x-1/2 bg-center sm:top-[45%] lg:left-[44%] lg:top-0 lg:translate-x-0"
        style={{
          backgroundImage: `url(${HeroPhone})`,
        }}
      />
      <div
        className="absolute top-0 h-full w-full bg-right bg-no-repeat lg:right-0"
        style={{
          backgroundImage: `url(${HeroPattern})`,
        }}
      />
    </div>
  );
};

export default FrameCard;
