import React from "react";

type Props = {
  imageUrl?: string;
};

const ExperienceTopMiddle = (props: Props) => {
  return (
    <div className="lg:w-[35%] md:w-1/2 w-[80%]">
      <img
        src={props.imageUrl}
        alt="Karsten Tauchert’s Professional Experience in Fullstack Development"
      />
    </div>
  );
};

export default ExperienceTopMiddle;
