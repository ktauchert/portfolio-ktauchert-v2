import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { TypedObject } from "@portabletext/types";

type aboutMeData = {
  title: string;
  content: TypedObject; // Adjust the type according to your content structure
  imageUrl: string;
};

type Props = {
  aboutMeData: aboutMeData;
};

const AboutMeMain = ({ aboutMeData }: Props) => {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col gap-12 max-w-[1280px] mx-auto justify-between items-center px-5 mt-[120px]"
    >
      <AboutMeText title={aboutMeData.title} content={aboutMeData.content} />
      <AboutMeImage imageUrl={aboutMeData.imageUrl} />
    </div>
  );
};

export default AboutMeMain;
