import bgPattern from "@/assets/web-design/desktop/bg-pattern-intro-web.svg";

type PropsType = {
  title: string;
  text: string;
};

const TitleCard = ({ title, text }: PropsType) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-[24px] rounded-[15px] bg-PEACH bg-cover bg-center bg-no-repeat p-10 text-center text-white"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <h1 className="text-[48px] font-medium capitalize leading-[48px]">
        {title}
      </h1>
      <p className="max-w-[400px] text-wrap text-[16px] leading-[26px]">
        {text}
      </p>
    </div>
  );
};

export default TitleCard;
