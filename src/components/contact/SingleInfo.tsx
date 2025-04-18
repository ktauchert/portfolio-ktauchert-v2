import React from "react";

type Props = {
  text: string;
  Image: React.ElementType; // React component type
};

const SingleInfo = ({ text, Image }: Props) => {
  return (
    <div className="flex gap-4 items-center justify-start w-full">
      <div>
        <Image className="text-3xl text-white" />
      </div>
      <p className="text-2xl text-white">{text}</p>
    </div>
  );
};

export default SingleInfo;
