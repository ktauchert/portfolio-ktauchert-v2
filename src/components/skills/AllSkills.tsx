import SingleSkill from "./SingleSkill";
import skills from "../../helper/skillsMap";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((skill, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeIn("down", index * 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkill name={skill.name} icon={skill.icon} index={index} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
