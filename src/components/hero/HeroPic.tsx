import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

type Props = {
  imageUrl?: string;
  className?: string;
};

const HeroPic = (props: Props) => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className={`${props.className} relative aspect-square flex justify-center items-center`}
    >
      <img
        className="w-[80%]"
        src={`${props?.imageUrl}`}
        alt="Karsten Tauchert Fullstack Web Developer Picture"
      />
      <PiHexagonThin className="absolute w-[100%] h-[100%]  md:w-[110%] md:h-[110%] top-4 left-0 right-0 bottom-0  md:top-[-2%] md:left-[-4%] -z-50  text-cyan blur-lg animate-[spin_20s_linear_infinite]" />
    </motion.div>
  );
};

export default HeroPic;
