
import SingleSkillSM from "./SingleSkillSM";
import skills from "../../helper/skillsMap";

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-12 my-12">
      {skills.map((skill, index) => {
        return (
          <SingleSkillSM
            key={index}
            name={skill.name}
            index={index}
            icon={skill.icon}
          />
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
