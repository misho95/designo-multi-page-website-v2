const AboutPack = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
      <AboutCard
        img="src/assets/home/desktop/illustration-passionate.svg"
        title="passionate"
        text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <AboutCard
        img="src/assets/home/desktop/illustration-resourceful.svg"
        title="resourceful"
        text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
      />
      <AboutCard
        img="src/assets/home/desktop/illustration-friendly.svg"
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
    <div className="max-w-[327px] sm:max-w-[689px] lg:max-w-[350px] flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-[48px] lg:gap-[32px] text-DARK_GREY">
      <img src={img} />
      <div className="flex flex-col gap-[32px] justify-center items-center sm:items-start lg:items-center">
        <h2 className="text-[20px] font-medium leading-[26px] tracking-[5px] uppercase">
          {title}
        </h2>
        <p className="text-[16px] leading-[26px] text-center sm:text-left lg:text-center">
          {text}
        </p>
      </div>
    </div>
  );
};
