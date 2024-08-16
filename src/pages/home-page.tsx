import AboutPack from "../components/home/about-pack";
import DesignPack from "../components/home/design-pack";
import FrameCard from "../components/home/frame-card";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[120px] sm:gap-[160px] items-center">
      <FrameCard />
      <div className="w-full">
        <DesignPack />
      </div>
      <AboutPack />
    </div>
  );
};

export default HomePage;
