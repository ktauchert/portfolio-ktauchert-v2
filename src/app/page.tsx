import AboutMeMain from "@/components/about/AboutMeMain";
import ContactMain from "@/components/contact/ContactMain";
import ExperienceMain from "@/components/experience/ExperienceMain";
import HeroMain from "@/components/hero/HeroMain";
import ProjectsMain from "@/components/projects/ProjectsMain";
import SkillMain from "@/components/skills/SkillMain";
import { client } from "@/sanity/lib/client";

const fetchHeroData = async () => {
  const query = `*[_type == "hero" && lang == $lang][0]{
    title,
    name,
    herotext,
    "imageUrl": image.asset->url
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};

const fetchAboutMeData = async () => {
  const query = `*[_type == "about" && lang == $lang][0]{
    title,
    content,
    "imageUrl": image.asset->url
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};

const fetchSkillsData = async () => {
  const query = `*[_type == "skills" && lang == $lang][0]{
    title,
    description,
    skills,
    "imageUrl": image.asset->url
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};
const fetchExperienceTopData = async () => {
  const query = `*[_type == "experiencetop" && lang == $lang][0]{
    title,
    "imageUrl": image.asset->url,
    since,
    countyears,
    countprojects,
    countclients,
    content,
    short,
    date
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};
const fetchExperienceData = async () => {
  const query = `*[_type == "experience" && lang == $lang]{
    jobtitle,
    company,
    datefrom,
    dateuntil,
    content
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};
const fetchProjectsTopData = async () => {
  const query = `*[_type == "projecttop" && lang == $lang][0]{
    title,
    description
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};
const fetchProjectsData = async () => {
  const query = `*[_type == "projects" && lang == $lang]{
    title,
    year,
    description,
    "imageUrl": image.asset->url,
    link,
    slug,
  }`;
  const params = { lang: "en" };
  const data = await client.fetch(query, params, { next: { revalidate: 300 } });
  return data;
};

export default async function Home() {
  const heroData = await fetchHeroData();
  const aboutMeData = await fetchAboutMeData();
  const skillsData = await fetchSkillsData();

  const experienceData = await fetchExperienceData();
  const experienceTopData = await fetchExperienceTopData();

  const projectsData = await fetchProjectsData();
  const projectsTopData = await fetchProjectsTopData();

  return (
    <div className=" w-full h-full flex flex-col justify-center overflow-x-hidden">
      <HeroMain heroData={heroData} />
      <AboutMeMain aboutMeData={aboutMeData} />
      <SkillMain skillsData={skillsData} />
      <ExperienceMain
        experiences={experienceData}
        experienceTop={experienceTopData}
      />
      <ProjectsMain
        projectsData={projectsData}
        projectsTopData={projectsTopData}
      />
      <ContactMain />
    </div>
  );
}
