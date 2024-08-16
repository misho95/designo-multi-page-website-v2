import { Button } from "../shared/button";

const FrameCard = () => {
  return (
    <div className="relative overflow-hidden px-[24px] sm:px-[95px] py-[80px] sm:py-[145px] bg-PEACH text-white sm:rounded-[15px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 ">
      <div className="flex flex-col items-center lg:items-start gap-[40px] text-center lg:text-left z-[30]">
        <h1 className="text-[32px] sm:text-[48px] leading-[36px] sm:leading-[48px] font-medium ">
          Award-winning custom <br /> designs and digital <br /> branding
          solutions
        </h1>
        <p className="text-[15px] sm:text-[16px] leading-[25px] sm:leading-[26px]">
          With over 10 years in the industry, we are experienced in <br />
          creating fully responsive websites, app design, and engaging <br />
          brand experiences. Find out more about our services.
        </p>
        <Button>learn more</Button>
      </div>
      <div
        className="bg-center w-[624px] h-[913px] absolute top-[40%] sm:top-[45%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[44%] lg:top-0"
        style={{
          backgroundImage: "url(src/assets/home/desktop/image-hero-phone.png)",
        }}
      />
      <div
        className="absolute top-0  lg:right-0 w-full h-full bg-no-repeat bg-right "
        style={{
          backgroundImage:
            "url(src/assets/home/desktop/bg-pattern-hero-home.svg)",
        }}
      />
    </div>
  );
};

export default FrameCard;
