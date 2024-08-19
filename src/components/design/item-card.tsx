type ProspType = {
  img: string;
  title: string;
  text: string;
};

const ItemCard = ({ img, title, text }: ProspType) => {
  return (
    <article className="group grid cursor-pointer grid-cols-1 overflow-hidden rounded-[15px] bg-[#FDF3F0] hover:bg-PEACH sm:grid-cols-2 lg:grid-cols-1">
      <img src={img} />
      <div className="flex flex-col items-center justify-center p-[32px]">
        <h4 className="text-center text-[20px] font-medium uppercase leading-[26px] tracking-[5px] text-PEACH group-hover:text-white">
          {title}
        </h4>
        <p className="mt-[16px] text-center text-[16px] leading-[26px] text-DARK_GREY group-hover:text-white">
          {text}
        </p>
      </div>
    </article>
  );
};

export default ItemCard;
