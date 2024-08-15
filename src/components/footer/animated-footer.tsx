import { animated, useInView } from "@react-spring/web";
import { ReactNode } from "react";

type AnimatedFooterPropsType = {
  children: ReactNode;
};

const AnimatedFooter = ({ children }: AnimatedFooterPropsType) => {
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      y: "100%",
    },
    to: {
      opacity: 1,
      y: "0%",
    },
    config: {
      mass: 5,
      friction: 120,
      tension: 100,
      duration: 700,
    },
  }));

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

export default AnimatedFooter;
