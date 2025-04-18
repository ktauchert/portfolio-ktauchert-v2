import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyan-medium absolute top-0 right-[10%] animate-pulse"></div>
      <div className="shadow-orange-medium absolute top-0 right-[30%] animate-pulse"></div>

      <div className="shadow-cyan-medium absolute top-[40%] left-0 animate-pulse"></div>
      <div className="shadow-orange-medium absolute top-[70%] left-4 animate-pulse"></div>
    </div>
  );
};

export default HeroGradient;
