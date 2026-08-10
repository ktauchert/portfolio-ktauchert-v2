import { FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import {
  SiCypress,
  SiDocker,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "SvelteKit", icon: SiSvelte },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PHP", icon: FaPhp },
  { name: "Python", icon: FaPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Cypress", icon: SiCypress },
  { name: "OpenAI", icon: SiOpenai },
];

export default skills;
