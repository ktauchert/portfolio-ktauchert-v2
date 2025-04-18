import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";
import { ExperienceTopType } from "./ExperienceMain";

type Props = {
  experienceTop: ExperienceTopType;
};

const ExperienceTop = ({ experienceTop }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center w-full mt-10 gap-4">
      <ExperienceTopLeft
        since={experienceTop.since}
        countYears={experienceTop.countyears}
        countProjects={experienceTop.countprojects}
        short={experienceTop.short}
      />
      <ExperienceTopMiddle imageUrl={experienceTop.imageUrl} />
      <ExperienceTopRight content={experienceTop.content} />
    </div>
  );
};

export default ExperienceTop;
