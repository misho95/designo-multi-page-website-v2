import { Button } from "../shared/button";

const GetInTouch = () => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 h-[327px] w-[89.844%] max-w-[1111px] -translate-x-1/2 sm:h-[350px] lg:h-[292px] lg:w-[77.20%]">
      <div className="pointer-events-auto relative -top-[50%] rounded-[15px] bg-PEACH sm:-top-[76.28571428571429%] lg:-top-[75.34246575342466%]">
        <div
          className="flex h-full flex-col items-center justify-center gap-[32px] bg-cover bg-center px-[min(96px,5.941vw)] py-[57px] lg:flex-row lg:justify-between lg:py-[73.25px]"
          style={{
            backgroundImage:
              "url('src/assets/shared/desktop/bg-pattern-call-to-action.svg')",
          }}
        >
          <span className="flex flex-col items-center gap-[13.5px] text-center lg:items-start lg:text-left">
            <h2 className="shrink-0 text-[32px] font-[500] leading-[36px] sm:text-[40px] sm:leading-[40px]">
              Let’s talk about <br /> your project
            </h2>
            <p className="text-[15px] leading-[25px] sm:text-[16px] sm:leading-[26px]">
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
