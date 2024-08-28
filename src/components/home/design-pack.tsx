import weDesign from "@/assets/home/desktop/image-web-design-small.webp";
import appDesign from "@/assets/home/desktop/image-app-design.webp";
import graphicDesign from "@/assets/home/desktop/image-graphic-design.webp";
import DesignNavCard from "@/components/home/design-nav-card";

const DesignPack = () => {
  return (
    <div className="grid grid-cols-1 gap-[24px] px-[24px] sm:px-0 lg:h-[640px] lg:grid-cols-2">
      <div className="lg:min-h-auto min-h-[250px] sm:min-h-[200px] lg:row-span-2">
        <DesignNavCard title={"web design"} img={weDesign} url="/web-design" />
      </div>
      <DesignNavCard title={"app design"} img={appDesign} url="/app-design" />
      <DesignNavCard
        title={"graphic design"}
        img={graphicDesign}
        url="/graphic-design"
      />
    </div>
  );
};

export default DesignPack;
