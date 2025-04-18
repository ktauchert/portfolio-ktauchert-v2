import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

export type ProjectTopDataType = {
  title: string;
  description: string;
};
export type ProjectDataType = {
  title: string;
  year: number;
  description: string;
  imageUrl: string;
  link: string;
};

type Props = {
  projectsTopData: ProjectTopDataType;
  projectsData: ProjectDataType[];
};

const ProjectsMain = ({ projectsTopData, projectsData }: Props) => {
  return (
    <div id="projects" className="max-w-[1280px] mx-auto px-4 mt-[120px]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText
          title={projectsTopData.title}
          description={projectsTopData.description}
        />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] w-[calc(100%-4rem)] mx-auto mt-12">
        {projectsData
          .sort((project_1, project_2) => project_2.year - project_1.year)
          .map((project, index) => {
            const align = index % 2 === 0 ? "left" : "right";
            return (
              <SingleProject
                key={index}
                title={project.title}
                year={project.year}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                align={align}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsMain;
