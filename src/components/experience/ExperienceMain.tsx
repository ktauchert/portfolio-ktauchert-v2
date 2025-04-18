import React from "react";
import ExperienceTop from "./ExperienceTop";
import ExperienceText from "./ExperienceText";
import AllExperiences from "./AllExperiences";
import { TypedObject } from "@portabletext/types";

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
      <ExperienceText title={experienceTop.title} />
      <ExperienceTop experienceTop={experienceTop} />
      <div className="w-full h-1 mt-4 bg-light-brown lg:block hidden"></div>
      <AllExperiences experiences={experiences} />
    </div>
  );
};

export default ExperienceMain;
