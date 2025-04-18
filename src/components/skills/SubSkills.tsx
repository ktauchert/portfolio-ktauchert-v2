import React from "react";

type Props = {
  imageUrl: string;
};

const SubSkills = (props: Props) => {
  return (
    <div className="border-y-2 border-light-grey relative">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img src={props.imageUrl} alt="SubSkills Image" />
    </div>
  );
};

export default SubSkills;
