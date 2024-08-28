import { animated, useSpring } from "@react-spring/web";
import { createContext, ReactNode, useEffect, useRef, useState } from "react";

export const HeaderContext = createContext<any>(null);

const AnimatedHeader = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const prevY = useRef(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const totalScrollableHeight = scrollHeight - clientHeight;
    const currentScrollProgress = (scrollTop / totalScrollableHeight) * 100;

    prevY.current = scrollY;
    setScrollY(currentScrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const props = useSpring({
    transform: open
      ? "translate(0%, 0%)"
      : scrollY >= prevY.current
        ? "translate(0%, -100%)"
        : "translate(0%, 0%)",
    config: {
      mass: 5,
      friction: 20,
      tension: 30,
      duration: 300,
    },
  });

  return (
    <HeaderContext.Provider value={{ open, setOpen }}>
      <animated.div style={{ ...props }} className="sticky top-0 z-[99]">
        {children}
      </animated.div>
    </HeaderContext.Provider>
  );
};

export default AnimatedHeader;
