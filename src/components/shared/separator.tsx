import clsx from "clsx";

type SeparatorPropsType = {
  type: "light" | "dark";
};

const Separator = ({ type }: SeparatorPropsType) => {
  return (
    <div
      className={clsx("h-[1px] w-full", {
        "bg-white/10": type === "light",
        "bg-black/10": type === "dark",
      })}
    />
  );
};

export default Separator;
