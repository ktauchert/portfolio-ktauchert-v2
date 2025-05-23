import React from "react";

type Props = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
};
const SingleSkillSM = (props: Props) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <props.icon className="text-7xl text-orange cursor-pointer" />
      <p className="uppercase text-center mt-4 text-white">{props.name}</p>
    </div>
  );
};

export default SingleSkillSM;
