import { Link } from "react-router-dom";
import logoLight from "@/assets/shared/desktop/logo-light.png";
import logoDark from "@/assets/shared/desktop/logo-dark.png";

type LogoPropsType = {
  type: "light" | "dark";
};

const Logo = ({ type }: LogoPropsType) => {
  return (
    <Link to="/">
      <img
        src={type === "light" ? logoLight : logoDark}
        alt="logo"
        width={404}
        height={54}
        className="h-[27px] w-[197px] select-none object-cover object-left"
      />
    </Link>
  );
};

export default Logo;
