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
        className="w-[196px] h-[24px] object-cover select-none"
      />
    </Link>
  );
};

export default Logo;
