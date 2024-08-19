import { useContext } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import { HeaderContext } from "@/components/header/aniamted-header";
import { NAV_LINKS_LIST } from "@/utils/data";
import menuOpen from "@/assets/shared/mobile/icon-hamburger.svg";
import menuClose from "@/assets/shared/mobile/icon-close.svg";

const BurgerMenu = () => {
  const { open, setOpen } = useContext(HeaderContext);

  const handleChange = () => {
    setOpen(!open);
  };

  const springs = useSpring({
    y: open ? "0%" : "100%",
  });

  return (
    <>
      <button onClick={handleChange}>
        {open ? (
          <img src={menuClose} alt="close" width={24} height={20} />
        ) : (
          <img src={menuOpen} alt="open" width={20} height={20} />
        )}
      </button>
      {createPortal(
        <animated.div
          style={springs}
          className="fixed top-[101px] z-[99] h-full w-full bg-black/50 backdrop-blur-sm sm:hidden"
        >
          <div className="flex flex-col gap-[32px] bg-BLACK px-[24px] py-[48px]">
            {NAV_LINKS_LIST.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.url}
                  className="text-[24px] uppercase leading-[25px] tracking-[2px] text-white"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </animated.div>,
        document.body,
      )}
    </>
  );
};

export default BurgerMenu;
