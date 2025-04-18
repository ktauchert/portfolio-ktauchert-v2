import React from "react";
import ExperienceInfo from "./ExperienceInfo";

type Props = {
  since: string;
  countYears: string;
  countProjects: string;
  short: string;
};

const ExperienceTopLeft = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 w-[300px] md:w-1/2">
      <p className="text-orange uppercase font-bold special text-3xl text-center">
        Since {props.since}
      </p>
      <div className="flex gap-4 items-center justify-center">
        <ExperienceInfo number={props.countYears} info="Years" />
        <p className="font-bold text-light-brown text-6xl">-</p>
        <ExperienceInfo number={props.countProjects} info="Projects" />
      </div>
      <p className="text-white text-center">{props.short}</p>
      <ExperienceInfo number="75%" info="Reduction" />
    </div>
  );
};

export default ExperienceTopLeft;
