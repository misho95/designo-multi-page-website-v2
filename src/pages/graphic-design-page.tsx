import DesignNav from "@/components/design/design-nav";
import ItemCard from "@/components/design/item-card";
import TitleCard from "@/components/design/title-card";

const GraphicDesignPage = () => {
  const data = [
    {
      id: 1,
      title: "tim brown",
      text: "A book cover designed for Tim Brown’s new release, ‘Change’",
      img: "src/assets/graphic-design/desktop/image-change.jpg",
    },
    {
      id: 2,
      title: "boxed water",
      text: "A simple packaging concept made for Boxed Water",
      img: "src/assets/graphic-design/desktop/image-boxed-water.jpg",
    },
    {
      id: 3,
      title: "science!",
      text: "A poster made in collaboration with the Federal Art Project",
      img: "src/assets/graphic-design/desktop/image-science.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-[160px] px-[24px] sm:px-0">
      <TitleCard
        title="graphic design"
        text="We deliver eye-catching branding materials that are 
tailored to meet your business objectives."
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

export default GraphicDesignPage;
