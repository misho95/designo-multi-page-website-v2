import { lazy } from "react";
import FrameCard from "../components/home/frame-card";
const AboutPack = lazy(() => import("../components/home/about-pack"));
const DesignPack = lazy(() => import("../components/home/design-pack"));

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-[120px] sm:gap-[160px]">
      <FrameCard />
      <div className="w-full">
        <DesignPack />
      </div>
      <AboutPack />
    </div>
  );
};

export default HomePage;
