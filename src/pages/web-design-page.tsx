import DesignNav from "@/components/design/design-nav";
import ItemCard from "@/components/design/item-card";
import TitleCard from "@/components/design/title-card";
import { WEB_DESIGN_DATA } from "@/utils/data";

const WebDesignPage = () => {
  return (
    <div className="flex flex-col gap-[96px] px-[24px] sm:gap-[120px] sm:px-0 lg:gap-[160px]">
      <TitleCard
        title="web design"
        text="We build websites that serve as powerful marketing tools and
        bring memorable brand experiences."
      />
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
        {WEB_DESIGN_DATA.map((item) => {
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

export default WebDesignPage;
