import React from "react";
import SingleExperience from "./SingleExperience";
import { ExperienceType } from "./ExperienceMain";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

type Props = {
  experiences: ExperienceType[];
};

const AllExperiences = ({ experiences }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-10">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} key={index} />
            {experiences.length !== index + 1 && (
              <>
                <FaArrowRight className="text-6xl text-orange lg:block hidden" />
                <FaArrowDown className="mx-auto mt-10 text-6xl text-orange lg:hidden block" />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
