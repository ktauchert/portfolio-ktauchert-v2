import React from "react";
import { PiHexagonThin } from "react-icons/pi";

type Props = {
  imageUrl?: string;
  className?: string;
};

const HeroPic = (props: Props) => {
  return (
    <div
      className={`${props.className} relative aspect-square flex justify-center items-center`}
    >
      <img
        className="w-[80%]"
        src={`${props?.imageUrl}`}
        alt="Karsten Tauchert Fullstack Web Developer Picture"
      />
      <PiHexagonThin className="absolute w-[100%] h-[100%]  md:w-[110%] md:h-[110%] top-4 left-0 right-0 bottom-0  md:top-[-2%] md:left-[-4%] -z-50  text-cyan blur-lg animate-[spin_20s_linear_infinite]" />
    </div>
  );
};

export default HeroPic;
