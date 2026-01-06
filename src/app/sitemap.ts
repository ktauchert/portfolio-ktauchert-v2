import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

interface ProjectData {
  slug: string;
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.ktauchert.de";

  // Fetch all projects
  const projects = await client.fetch<ProjectData[]>(
    `*[_type == "projects"]{ "slug": slug.current, _updatedAt }`,
    {},
    { next: { revalidate: 3600 } }
  );

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
