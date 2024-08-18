import passionate from "@/assets/home/desktop/illustration-passionate.svg";
import resourceful from "@/assets/home/desktop/illustration-resourceful.svg";
import friendly from "@/assets/home/desktop/illustration-friendly.svg";

const AboutPack = () => {
  return (
    <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
      <AboutCard
        img={passionate}
        title="passionate"
        text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <AboutCard
        img={resourceful}
        title="resourceful"
        text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
      />
      <AboutCard
        img={friendly}
        title="friendly"
        text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
      />
    </div>
  );
};

export default AboutPack;

const AboutCard = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex max-w-[327px] flex-col items-center justify-center gap-[48px] text-DARK_GREY sm:max-w-[689px] sm:flex-row lg:max-w-[350px] lg:flex-col lg:gap-[32px]">
      <img src={img} alt={title} width={202} height={202} />
      <div className="flex flex-col items-center justify-center gap-[32px] sm:items-start lg:items-center">
        <h2 className="text-[20px] font-medium uppercase leading-[26px] tracking-[5px]">
          {title}
        </h2>
        <p className="text-center text-[16px] leading-[26px] sm:text-left lg:text-center">
          {text}
        </p>
      </div>
    </div>
  );
};
