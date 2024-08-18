const DesignPack = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] h-[640px] px-[24px] sm:px-0">
      <div className="lg:row-span-2">
        <DesignCard
          title={"web design"}
          url={"src/assets/home/desktop/image-web-design-large.jpg"}
        />
      </div>
      <DesignCard
        title={"app design"}
        url={"src/assets/home/desktop/image-app-design.jpg"}
      />
      <DesignCard
        title={"graphic design"}
        url={"src/assets/home/desktop/image-graphic-design.jpg"}
      />
    </div>
  );
};

export default DesignPack;

const DesignCard = ({ url, title }: { url: string; title: string }) => {
  return (
    <article className="rounded-[15px] w-full h-full overflow-hidden group cursor-pointer relative">
      <img
        src={url}
        className="z-10 absolute top-0 left-0 w-full h-full object-cover object-center"
        alt={title}
        width={200}
        height={200}
      />
      <div className="relative z-20 w-full h-full bg-black/50 group-hover:bg-PEACH/50  uppercase text-white font-medium flex flex-col gap-[24px] justify-center items-center">
        <h2 className="text-[28px] sm:text-[40px] leading-[36px] sm:leading-[48px] tracking-[1.4px] sm:tracking-[2px]">
          {title}
        </h2>
        <p className="text-[15px] tracking-[5px]">view projects</p>
      </div>
    </article>
  );
};
