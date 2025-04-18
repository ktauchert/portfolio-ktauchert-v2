const SubHeroTags = () => {
  return (
    <div className="w-full border-y border-light-grey text-light-grey flex justify-around items-center uppercase xl:text-4xl md:text-2xl text-xl py-8 bg-brown">
      <div className="w-full max-w-[1280px] flex  justify-center md:justify-evenly lg:justify-between px-4">
        <p>Adaptive</p>
        <p className="hidden md:block">Collaborative</p>
        <p className="hidden lg:block">Curious</p>
      </div>
    </div>
  );
};

export default SubHeroTags;
