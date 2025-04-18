import React from "react";

type Props = {
  title: string;
  description: string;
};

const SkillsText = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">{props.title}</h2>
      <p className="text-lg text-white text-center">{props.description}</p>
    </div>
  );
};

export default SkillsText;
