import SingleSkillSM from "./SingleSkillSM";
import skills from "../../helper/skillsMap";
import * as motion from "motion/react-client";
import { fadeIn } from "@/utils/variants";

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-12 my-12">
      {skills.map((skill, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkillSM name={skill.name} index={index} icon={skill.icon} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
