import React from "react";

type Props = {
  imageUrl?: string;
};

const ExperienceTopMiddle = (props: Props) => {
  return (
    <div className="lg:w-[35%] md:w-1/2 w-[80%]">
      <img src={props.imageUrl} alt="Experience Top Middle" />
    </div>
  );
};

export default ExperienceTopMiddle;
