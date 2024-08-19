import DesignNav from "@/components/design/design-nav";
import ItemCard from "@/components/design/item-card";
import TitleCard from "@/components/design/title-card";
import { GRAPHIC_DESIGN_DATA } from "@/utils/data";

const GraphicDesignPage = () => {
  return (
    <div className="flex flex-col gap-[160px] px-[24px] sm:px-0">
      <TitleCard
        title="graphic design"
        text="We deliver eye-catching branding materials that are 
tailored to meet your business objectives."
      />
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
        {GRAPHIC_DESIGN_DATA.map((item) => {
          return (
            <ItemCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
      <DesignNav />
    </div>
  );
};

export default GraphicDesignPage;
