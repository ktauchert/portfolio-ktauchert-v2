import { type SchemaTypeDefinition } from "sanity";
import hero from "./hero";
import about from "./about";
import skills from "./skills";
import experiencetop from "./experiencetop";
import experience from "./experience";
import projects from "./projects";
import projecttop from "./projecttop";
import blog from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    about,
    skills,
    experiencetop,
    experience,
    projecttop,
    projects,
    blog,
  ],
};
