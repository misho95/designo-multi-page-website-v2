import DesignNav from "@/components/design/design-nav";
import ItemCard from "@/components/design/item-card";
import TitleCard from "@/components/design/title-card";

const WebDesignPage = () => {
  const data = [
    {
      id: 1,
      title: "express",
      text: "A multi-carrier shipping website for ecommerce businesses",
      img: "/assets/web-design/desktop/image-express.jpg",
    },
    {
      id: 2,
      title: "transfer",
      text: "Site for low-cost money transfers and sending money within seconds",
      img: "/assets/web-design/desktop/image-transfer.jpg",
    },
    {
      id: 3,
      title: "photon",
      text: "A state-of-the-art music player with high-resolution audio and DSP effects",
      img: "/assets/web-design/desktop/image-photon.jpg",
    },
    {
      id: 4,
      title: "builder",
      text: "Connects users with local contractors based on their location",
      img: "/assets/web-design/desktop/image-builder.jpg",
    },
    {
      id: 5,
      title: "blogr",
      text: "Blogr is a platform for creating an online blog or publication",
      img: "/assets/web-design/desktop/image-blogr.jpg",
    },
    {
      id: 6,
      title: "camp",
      text: "Get expert training in coding, data, design, and digital marketing",
      img: "/assets/web-design/desktop/image-camp.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-[160px] px-[24px] sm:px-0">
      <TitleCard
        title="web design"
        text="We build websites that serve as powerful marketing tools and
        bring memorable brand experiences."
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

export default WebDesignPage;
