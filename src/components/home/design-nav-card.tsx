import { Link } from "react-router-dom";

type PropsType = {
  title: string;
  url: string;
  img: string;
};

const DesignNavCard = ({ title, url, img }: PropsType) => {
  return (
    <Link
      to={url}
      className="group relative h-full min-h-[250px] w-full cursor-pointer overflow-hidden rounded-[15px] sm:min-h-[200px] lg:min-h-[308px]"
    >
      <img
        src={img}
        className="absolute left-0 top-0 z-10 h-full w-full rounded-[15px] object-cover object-center"
        alt={title}
        width={541}
        height={308}
      />
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-[24px] rounded-[15px] bg-black/50 font-medium uppercase text-white group-hover:bg-PEACH/50">
        <h2 className="text-[28px] leading-[36px] tracking-[1.4px] sm:text-[40px] sm:leading-[48px] sm:tracking-[2px]">
          {title}
        </h2>
        <p className="text-[15px] tracking-[5px]">view projects</p>
      </div>
    </Link>
  );
};

export default DesignNavCard;
