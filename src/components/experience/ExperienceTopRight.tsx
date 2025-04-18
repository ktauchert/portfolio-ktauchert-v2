import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import React from "react";

type Props = {
  content: TypedObject[];
};

const ExperienceTopRight = ({ content }: Props) => {
  return (
    <div className="xl:w-1/4 lg:w-1/3 w-full border border-light-brown p-4 rounded-xl ">
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
            strong: ({ children }) => (
              <strong className="text-orange text-bold">{children}</strong>
            ),
          },
        }}
      />
    </div>
  );
};

export default ExperienceTopRight;
