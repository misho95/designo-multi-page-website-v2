import { Button } from "../shared/button";

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

      {/* <div
        className="bg-center w-[624px] h-[913px] absolute top-[40%] sm:top-[45%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[44%] lg:top-0"
        style={{
          backgroundImage: "url(src/assets/home/desktop/image-hero-phone.png)",
        }}
      /> */}
      <div
        className="absolute top-0 h-full w-full bg-right bg-no-repeat lg:right-0"
        style={{
          backgroundImage:
            "url(src/assets/home/desktop/bg-pattern-hero-home.svg)",
        }}
      />
    </div>
  );
};

export default FrameCard;
