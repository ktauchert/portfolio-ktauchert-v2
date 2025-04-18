import React from "react";
import { ExperienceType } from "./ExperienceMain";
import { PortableText } from "@portabletext/react";

type Props = {
  experience: ExperienceType;
};

const SingleExperience = ({ experience }: Props) => {
  return (
    <div className="md:h-full lg:w-[240px] xl:w-[320px] h-auto w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan">{experience.jobtitle}</p>
      <p className="text-orange font-bold">{experience.company}</p>
      <p className="text-light-grey">
        {experience.datefrom} - {experience.dateuntil}
      </p>
      <PortableText
        value={experience.content}
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
              <strong className="font-bold text-orange-500">{children}</strong>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <ul className="list-disc pl-4 text-white">{children}</ul>
            ),
            number: ({ children }) => (
              <ol className="list-decimal list-inside text-white">
                {children}
              </ol>
            ),
          },
          listItem: ({ children }) => (
            <li className="text-base text-white">{children}</li>
          ),
        }}
      />
    </div>
  );
};

export default SingleExperience;
