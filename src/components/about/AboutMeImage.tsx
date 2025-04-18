import React from "react";

type Props = {
  imageUrl: string;
};

const AboutMeImage = (props: Props) => {
  return (
    <div className="">
      <img
        src={props.imageUrl}
        alt="Karsten Tauchert Explaining His Fullstack Developer Journey"
        className="w-full h-auto object-cover rounded-lg"
      />
      {/* <Image src={props.imageUrl} alt="About Me" width={500} height={500} className="w-full h-auto object-cover rounded-lg shadow-lg" /> */}
    </div>
  );
};

export default AboutMeImage;
