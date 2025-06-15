import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import PortableTextWrapper from "@/components/PortableTextWrapper";
import { PortableTextBlock } from "@portabletext/types";

// Update interface with proper PortableTextBlock type
interface ProjectDetail {
  title: string;
  description: string;
  year: number;
  imageUrl: string;
  galleryImages: string[];
  link: string;
  githubLink: string;
  problem: PortableTextBlock[];
  duration: string;
  role: string;
  technologies: string[];
  challenges: {
    challenge: PortableTextBlock[];
    solution: PortableTextBlock[];
  }[];
  features: string[];
}

// Use specific Next.js types for page props
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Function to fetch project data by slug
async function getProject(slug: string) {
  const query = `*[_type == "projects" && lang == $lang && slug.current == $slug][0]{
    title,
    description,
    year,
    "imageUrl": image.asset->url,
    "galleryImages": gallery[].asset->url,
    link,
    githubLink,
    problem,
    duration,
    role,
    technologies,
    challenges,
    features
  }`;

  const params = { lang: "en", slug };
  const project: ProjectDetail = await client.fetch(query, params, {
    next: { revalidate: 300 },
  });

  return project;
}

export async function generateMetadata({ params }: PageProps): Promise<any> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: `${project.title} | Karsten Tauchert`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Karsten Tauchert`,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mt-22 w-full max-w-6xl mx-auto px-4 py-8 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] mb-8 rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-[0.7]"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
          <div className="bg-black/50 p-6 backdrop-blur-sm rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-light-cyan">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="mb-10">
        <Link
          href="/#projects"
          className="inline-flex items-center text-cyan hover:text-light-cyan transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2 text-orange">
          Overview & Background
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <PortableTextWrapper value={project.problem} />
          </div>
          <div className="special bg-dark-grey bg-opacity-50 p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="text-light-orange font-semibold mb-1">My Role</h3>
              <p>{project.role}</p>
            </div>
            <div>
              <h3 className="text-light-orange font-semibold mb-1">
                Project Duration
              </h3>
              <p>{project.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2 text-orange">
          Technical Details
        </h2>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-light-orange">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-dark-grey rounded-full text-light-cyan text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-3 text-light-orange">
            Challenges & Solutions
          </h3>
          {project.challenges?.map((item, index) => (
            <div key={index} className="mb-6">
              <h4 className="font-bold mb-1 text-light-cyan">
                Challenge {index + 1}
              </h4>
              <div className="mb-2">
                <PortableTextWrapper value={item.challenge} />
              </div>
              <h4 className="font-bold mb-1 text-light-cyan">Solution</h4>
              <div className="mb-2">
                <PortableTextWrapper value={item.solution} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2 text-orange">
          Features & Functionality
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {project.features?.map((feature, index) => (
            <li key={index} className="special">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2 text-orange">
          Visual Impressions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.galleryImages?.map((image, index) => (
            <div
              key={index}
              className="relative h-60 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5 border-b border-gray-700 pb-2 text-orange">
          Links
        </h2>
        <div className="flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan hover:bg-dark-cyan text-dark-brown font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dark-grey hover:bg-grey text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
