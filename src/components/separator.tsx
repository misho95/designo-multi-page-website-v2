import clsx from "clsx";

type SeparatorPropsType = {
  type: "light" | "dark";
};

const Separator = ({ type }: SeparatorPropsType) => {
  return (
    <div
      className={clsx("w-full h-[1px]", {
        "bg-white/10": type === "light",
        "bg-black/10": type === "dark",
      })}
    />
  );
};

export default Separator;
