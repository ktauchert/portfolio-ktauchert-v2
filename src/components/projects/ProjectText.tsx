import React from "react";

type Props = {
  title: string;
  description: string;
};

const ProjectText = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-6xl text-cyan mb-10">{props.title}</h2>
      <p className="text-lg text-center text-white">{props.description}</p>
    </div>
  );
};

export default ProjectText;
