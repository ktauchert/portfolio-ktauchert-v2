import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

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
      <ProjectText
        title={projectsTopData.title}
        description={projectsTopData.description}
      />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
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
