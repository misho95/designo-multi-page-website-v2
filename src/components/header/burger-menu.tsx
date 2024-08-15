import { useContext } from "react";
import { createPortal } from "react-dom";
import { HeaderContext } from "./aniamted-header";
import { NAV_LINKS_LIST } from "../../utils/data";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

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
          <img src="src/assets/shared/mobile/icon-close.svg" alt="close" />
        ) : (
          <img src="src/assets/shared/mobile/icon-hamburger.svg" alt="open" />
        )}
      </button>
      {createPortal(
        <animated.div
          style={springs}
          className="bg-black/50 backdrop-blur-sm fixed top-[101px] w-full h-full z-[99] sm:hidden"
        >
          <div className="bg-BLACK px-[24px] py-[48px] flex flex-col gap-[32px]">
            {NAV_LINKS_LIST.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.url}
                  className="text-[24px] leading-[25px] tracking-[2px] text-white uppercase"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </animated.div>,
        document.body
      )}
    </>
  );
};

export default BurgerMenu;
