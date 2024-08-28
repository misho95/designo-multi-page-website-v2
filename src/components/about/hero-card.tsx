const HeroCard = () => {
  return (
    <article className="grid grid-cols-1 grid-rows-2 overflow-hidden bg-PEACH text-white sm:rounded-[15px] lg:grid-cols-2 lg:grid-rows-1">
      <img
        src="/assets/about/desktop/image-about-hero.jpg"
        className="block max-h-[320px] w-full place-self-end object-cover object-center lg:hidden"
        width={476}
        height={480}
      />
      <div
        className="flex w-full flex-col justify-center gap-[32px] bg-cover bg-bottom p-[6vw]"
        style={{
          backgroundImage:
            "url(/assets/about/desktop/bg-pattern-hero-about-desktop.svg)",
        }}
      >
        <h1 className="text-[32px] font-medium capitalize leading-[36px] sm:text-[48px] sm:leading-[48px]">
          about us
        </h1>
        <p className="text-[15px] leading-[25px] sm:text-[16px] sm:leading-[26px]">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <img
        src="/assets/about/desktop/image-about-hero.jpg"
        className="hidden h-full place-self-end object-cover object-center lg:block"
        width={476}
        height={480}
      />
    </article>
  );
};

export default HeroCard;
