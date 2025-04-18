import React from "react";
import SingleExperience from "./SingleExperience";
import { ExperienceType } from "./ExperienceMain";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

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
                <motion.div
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  className="items-center justify-center w-full lg:w-1/12 lg:h-1/2 h-1/12 lg:mt-0 lg:flex hidden"
                >
                  <FaArrowRight className="text-6xl text-orange lg:block hidden" />
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  className="flex justify-center w-full items-center lg:hidden"
                >
                  <FaArrowDown className="mx-auto mt-10 text-6xl text-orange lg:hidden block" />
                </motion.div>
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
