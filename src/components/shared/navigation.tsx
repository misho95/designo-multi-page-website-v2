import { Link } from "react-router-dom";
import { NAV_LINKS_LIST } from "../../utils/data";
import clsx from "clsx";

type NavPropsType = {
  type: "light" | "dark";
};

const Navigation = ({ type }: NavPropsType) => {
  return (
    <nav
      className={clsx("flex flex-col gap-[42px] sm:flex-row", {
        "text-white": type === "light",
        "text-DARK_GREY": type === "dark",
      })}
    >
      {NAV_LINKS_LIST.map((link) => {
        return (
          <Link
            key={link.id}
            to={link.url}
            className="group flex flex-col items-center gap-1 text-[14px] uppercase leading-[14px] tracking-[2px]"
          >
            {link.title}
            <span
              className={clsx(
                "block h-[1px] w-[0px] duration-300 group-hover:w-full",
                {
                  "bg-white/50": type === "light",
                  "bg-BLACK/50": type === "dark",
                },
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
