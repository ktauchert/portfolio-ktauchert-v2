import React from "react";
import AllSkills from "./AllSkills";

import SkillsText from "./SkillsText";
import AllSkillsSM from "./AllSkillsSM";
import SubSkills from "./SubSkills";
export type SkillKeys =
  | "html"
  | "css"
  | "js"
  | "typescript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "sass"
  | "figma"
  | "blender";
export type SkillsData = {
  title: string;
  description: string;
  skills: SkillKeys[];
  imageUrl: string;
};

const SkillMain = ({ skillsData }: { skillsData: SkillsData }) => {
  return (
    <div id="skills" className="mt-[120px]">
      <div className="max-w-[1280px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillsText
          title={skillsData.title}
          description={skillsData.description}
        />
        <div className="bottom-[50px] absolute left-0 right-0 lg:block hidden">
          <AllSkills skills={skillsData.skills} />
        </div>
        <div className=" lg:hidden block">
          <AllSkillsSM />
        </div>
      </div>
      <SubSkills imageUrl={skillsData.imageUrl} />
    </div>
  );
};

export default SkillMain;
