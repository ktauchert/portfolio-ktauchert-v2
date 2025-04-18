
import SingleSkill from "./SingleSkill";
import skills from "../../helper/skillsMap";

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((skill, index) => {
        return (
          <SingleSkill
            key={index}
            name={skill.name}
            icon={skill.icon}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default AllSkills;
