import { Link } from "react-router-dom";

type LogoPropsType = {
  type: "light" | "dark";
};

const Logo = ({ type }: LogoPropsType) => {
  return (
    <Link to="/">
      <img
        src={
          type === "light"
            ? "src/assets/shared/desktop/logo-light.png"
            : "src/assets/shared/desktop/logo-dark.png"
        }
        alt="logo"
        className="h-[27px] w-[197px] select-none object-cover object-left"
      />
    </Link>
  );
};

export default Logo;
