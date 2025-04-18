import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { TypedObject } from "@portabletext/types";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

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
      className="flex md:flex-row flex-col gap-12 max-w-[1280px] mx-auto justify-between items-center px-5 mt-[40px]"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:items-start items-center gap-4 text-center md:text-left w-full md:w-1/2"
      >
        <AboutMeText title={aboutMeData.title} content={aboutMeData.content} />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full md:w-1/2"
      >
        <AboutMeImage imageUrl={aboutMeData.imageUrl} />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
