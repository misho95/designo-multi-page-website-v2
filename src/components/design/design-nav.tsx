import { Link, useLocation } from "react-router-dom";
import DesignNavCard from "@/components/home/design-nav-card";

const links = [
  {
    id: 0,
    url: "/app-design",
    title: "app design",
    img: "src/assets/home/desktop/image-app-design.webp",
  },
  {
    id: 1,
    url: "/web-design",
    title: "web design",
    img: "src/assets/home/desktop/image-web-design-small.webp",
  },
  {
    id: 2,
    url: "/graphic-design",
    title: "graphic design",
    img: "src/assets/home/desktop/image-graphic-design.webp",
  },
];

const DesignNav = () => {
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
      {links
        .filter((l) => location.pathname !== l.url)
        .map((link) => {
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
