import DesignNav from "@/components/design/design-nav";
import ItemCard from "@/components/design/item-card";
import TitleCard from "@/components/design/title-card";
import { APP_DESIGN_DATA } from "@/utils/data";

const AppDesignPage = () => {
  return (
    <div className="flex flex-col gap-[96px] px-[24px] sm:gap-[120px] sm:px-0 lg:gap-[160px]">
      <TitleCard
        title="app design"
        text="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
        {APP_DESIGN_DATA.map((item) => {
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

export default AppDesignPage;
