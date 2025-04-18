import React from "react";
import ExperienceTop from "./ExperienceTop";
import ExperienceText from "./ExperienceText";
import AllExperiences from "./AllExperiences";
import { TypedObject } from "@portabletext/types";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

export type ExperienceTopType = {
  title: string;
  imageUrl: string;
  since: string;
  countyears: string;
  countprojects: string;
  countclients: string;
  short: string;
  date: string;
  content: TypedObject[];
};
export type ExperienceType = {
  jobtitle: string;
  company: string;
  datefrom: string;
  dateuntil: string;
  content: TypedObject[];
};

type Props = {
  experiences: ExperienceType[];
  experienceTop: ExperienceTopType;
};

const ExperienceMain = ({ experienceTop, experiences }: Props) => {
  return (
    <div id="experience" className="max-w-[1280px] mx-auto mt-[120px] px-5">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText title={experienceTop.title} />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop experienceTop={experienceTop} />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-light-brown lg:block hidden"></div>
      <AllExperiences experiences={experiences} />
    </div>
  );
};

export default ExperienceMain;
