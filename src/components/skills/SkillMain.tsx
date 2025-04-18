import React from "react";
import AllSkills from "./AllSkills";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";
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
    <div id="skills" className="mt-[40px]">
      <div className="max-w-[1280px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText
            title={skillsData.title}
            description={skillsData.description}
          />
        </motion.div>
        <div className="bottom-[50px] absolute left-0 right-0 lg:block hidden">
          <AllSkills />
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
