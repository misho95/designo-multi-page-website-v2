type PropsType = {
  title: string;
  text: string;
};

const TitleCard = ({ title, text }: PropsType) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-[24px] rounded-[15px] bg-PEACH bg-cover bg-center bg-no-repeat p-10 text-center text-white"
      style={{
        backgroundImage: `url(/assets/web-design/desktop/bg-pattern-intro-web.svg)`,
      }}
    >
      <h1 className="text-[32px] font-medium capitalize leading-[36px] sm:text-[48px] sm:leading-[48px]">
        {title}
      </h1>
      <p className="max-w-[400px] text-wrap text-[15px] leading-[25px] sm:text-[16px] sm:leading-[26px]">
        {text}
      </p>
    </div>
  );
};

export default TitleCard;
