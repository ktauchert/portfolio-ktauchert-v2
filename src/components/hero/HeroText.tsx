import React from "react";

type Props = {
  title?: string;
  name?: string;
  herotext?: string;
  className?: string;
};

const HeroText = ({ title, name, herotext, className }: Props) => {
  return (
    <div className={`${className}`}>
      <h2 className="lg:text-2xl text-xl uppercase text-cyan">{title}</h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl text-4xl font-bold special text-orange">
        {name}
      </h1>
      <p className="text-white mt-4 text-lg">{herotext}</p>
    </div>
  );
};

export default HeroText;
