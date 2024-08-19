import weDesign from "@/assets/home/desktop/image-web-design-small.webp";
import appDesign from "@/assets/home/desktop/image-app-design.webp";
import graphicDesign from "@/assets/home/desktop/image-graphic-design.webp";

const DesignPack = () => {
  return (
    <div className="grid h-[640px] grid-cols-1 gap-[24px] px-[24px] sm:px-0 lg:grid-cols-2">
      <div className="lg:row-span-2">
        <DesignCard title={"web design"} url={weDesign} />
      </div>
      <DesignCard title={"app design"} url={appDesign} />
      <DesignCard title={"graphic design"} url={graphicDesign} />
    </div>
  );
};

export default DesignPack;

const DesignCard = ({ url, title }: { url: string; title: string }) => {
  return (
    <article className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[15px]">
      <img
        src={url}
        className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
        alt={title}
        width={541}
        height={308}
      />
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-[24px] bg-black/50 font-medium uppercase text-white group-hover:bg-PEACH/50">
        <h2 className="text-[28px] leading-[36px] tracking-[1.4px] sm:text-[40px] sm:leading-[48px] sm:tracking-[2px]">
          {title}
        </h2>
        <p className="text-[15px] tracking-[5px]">view projects</p>
      </div>
    </article>
  );
};
