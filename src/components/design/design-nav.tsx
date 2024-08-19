import { useLocation } from "react-router-dom";
import DesignNavCard from "@/components/home/design-nav-card";
import { DESIGN_LINKS } from "@/utils/data";

const DesignNav = () => {
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
      {DESIGN_LINKS.filter((l) => location.pathname !== l.url).map((link) => {
        return (
          <DesignNavCard
            key={link.id}
            title={link.title}
            url={link.url}
            img={link.img}
          />
        );
      })}
    </div>
  );
};

export default DesignNav;
