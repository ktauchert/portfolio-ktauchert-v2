import { TypedObject } from "@portabletext/types";
import { PortableText } from "next-sanity";
import React from "react";

type Props = {
  title: string;
  content: TypedObject; // Adjust the type according to your content structure
};

const AboutMeText = ({ title, content }: Props) => {
  return (
    <div className="flex flex-col md:items-start items-center gap-4 text-center md:text-left w-full md:w-1/2">
      <h2 className="text-6xl text-cyan mb-10 text-center w-full">{title}</h2>
      <PortableText
        value={content}
        components={{
          block: ({ children }) => (
            <p className="text-base text-white">{children}</p>
          ),
          marks: {
            link: ({ children, value }) => {
                const { href } = value as { href: string };
              return (
                <a href={href} className="text-blue-500 underline">
                  {children}
                </a>
              );
            },
          },
        }}
      />
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange/60 transition-all cursor-pointer duration-500 md:self-start self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
