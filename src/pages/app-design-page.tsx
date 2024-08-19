import DesignNav from "@/components/design/design-nav";
import ItemCard from "@/components/design/item-card";
import TitleCard from "@/components/design/title-card";

const AppDesignPage = () => {
  const data = [
    {
      id: 1,
      title: "airfilter",
      text: "Solving the problem of poor indoor air quality by filtering the air",
      img: "/assets/app-design/desktop/image-airfilter.jpg",
    },
    {
      id: 2,
      title: "eyecam",
      text: "Product that lets you edit your favorite photos and videos at any time",
      img: "/assets/app-design/desktop/image-eyecam.jpg",
    },
    {
      id: 3,
      title: "faceit",
      text: "Get to meet your favorite internet superstar with the faceit app",
      img: "/assets/app-design/desktop/image-faceit.jpg",
    },
    {
      id: 4,
      title: "todo",
      text: "A todo app that features cloud sync with light and dark mode",
      img: "/assets/app-design/desktop/image-todo.jpg",
    },
    {
      id: 5,
      title: "loopstudios",
      text: "A VR experience app made for Loopstudios",
      img: "/assets/app-design/desktop/image-loopstudios.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-[160px] px-[24px] sm:px-0">
      <TitleCard
        title="app design"
        text="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
        {data.map((item) => {
          return (
            <ItemCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
      <DesignNav />
    </div>
  );
};

export default AppDesignPage;
