import { Link } from "react-router-dom";
import { NAV_LINKS_LIST } from "../utils/data";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="top-0 sticky flex justify-between items-center my-[70px]">
      <Logo type="dark" />
      <nav className="flex gap-[42px]">
        {NAV_LINKS_LIST.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.url}
              className="uppercase text-[14px] leading-[14px] tracking-[2px] text-DARK_GREY group flex flex-col gap-1 items-center"
            >
              {link.title}
              <span className="block h-[1px] w-[0px] group-hover:w-full duration-300 bg-BLACK/50" />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
