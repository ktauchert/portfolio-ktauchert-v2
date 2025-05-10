import React from "react";

type Props = {
  name: string;
  icon: React.ComponentType;
  index: number;
};

const SingleSkill = (props: Props) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-dark-grey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          <props.icon />
        </div>
        <div className="uppercase text-white font-bold">{props.name}</div>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
