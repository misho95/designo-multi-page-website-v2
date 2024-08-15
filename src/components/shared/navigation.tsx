import { Link } from "react-router-dom";
import { NAV_LINKS_LIST } from "../../utils/data";
import clsx from "clsx";

type NavPropsType = {
  type: "light" | "dark";
};

const Navigation = ({ type }: NavPropsType) => {
  return (
    <nav
      className={clsx("flex flex-col sm:flex-row gap-[42px]", {
        "text-white": type === "light",
        "text-DARK_GREY": type === "dark",
      })}
    >
      {NAV_LINKS_LIST.map((link) => {
        return (
          <Link
            key={link.id}
            to={link.url}
            className="uppercase text-[14px] leading-[14px] tracking-[2px]  group flex flex-col gap-1 items-center"
          >
            {link.title}
            <span
              className={clsx(
                "block h-[1px] w-[0px] group-hover:w-full duration-300",
                {
                  "bg-white/50": type === "light",
                  "bg-BLACK/50": type === "dark",
                }
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
