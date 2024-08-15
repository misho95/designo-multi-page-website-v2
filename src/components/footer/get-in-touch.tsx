import { Button } from "../shared/button";

const GetInTouch = () => {
  return (
    <div className="max-w-[1111px] w-[89.844%] lg:w-[77.20%] absolute top-0 left-1/2 -translate-x-1/2 h-[327px] sm:h-[350px] lg:h-[292px] pointer-events-none">
      <div className="bg-PEACH rounded-[15px] relative -top-[50%] sm:-top-[76.28571428571429%] lg:-top-[75.34246575342466%] pointer-events-auto">
        <div
          className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[32px] h-full bg-cover bg-center py-[57px] px-[min(96px,5.941vw)] lg:py-[73.25px] "
          style={{
            backgroundImage:
              "url('src/assets/shared/desktop/bg-pattern-call-to-action.svg')",
          }}
        >
          <span className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[13.5px]">
            <h2 className="text-[32px] sm:text-[40px] font-[500] leading-[36px] sm:leading-[40px] shrink-0">
              Let’s talk about <br /> your project
            </h2>
            <p className="leading-[25px] sm:leading-[26px] text-[15px] sm:text-[16px]">
              Ready to take it to the next level? Contact us today and find out
              <br />
              how our expertise can help your business grow.
            </p>
          </span>
          <Button>get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
