import React from "react";

type Props = {
  title: string;
};

const ExperienceText = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan">{props.title}</h2>
    </div>
  );
};

export default ExperienceText;
