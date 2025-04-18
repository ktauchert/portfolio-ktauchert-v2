import React from "react";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

type Props = {
  title?: string;
  name?: string;
  herotext?: string;
  className?: string;
};

const HeroText = ({ title, name, herotext, className }: Props) => {
  return (
    <div className={`${className}`}>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl text-xl uppercase text-cyan"
      >
        {title}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl text-4xl font-bold special text-orange"
      >
        {name}
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="text-white mt-4 text-lg"
      >
        {herotext}
      </motion.p>
    </div>
  );
};

export default HeroText;
