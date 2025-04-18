import React from "react";

type Props = {
  number: string;
  info: string;
};

const ExperienceInfo = ({ number, info }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-light-grey uppercase -mt-2">
        {info}
      </p>
    </div>
  );
};

export default ExperienceInfo;
