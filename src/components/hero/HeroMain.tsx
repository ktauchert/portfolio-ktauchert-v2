import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";
import SubHeroTags from "./SubHeroTags";

type HeroDataType = {
  title: string;
  name: string;
  herotext: string;
  imageUrl: string;
};

const HeroMain = ({ heroData }: { heroData: HeroDataType }) => {
  return (
    <div className="w-full flex flex-col items-center md:pt-[200px] pt-[120px] mb-20 overflow-hidden">
      <div className="max-w-[1280px] flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 mb-40 px-5">
        <HeroText
          className="lg:w-1/2 w-full"
          title={heroData?.title}
          name={heroData?.name}
          herotext={heroData?.herotext}
        />
        <HeroPic className="lg:w-1/2 w-full" imageUrl={heroData?.imageUrl} />
      </div>
      <HeroGradient />
      <SubHeroTags />
    </div>
  );
};

export default HeroMain;
