import { client } from "@/sanity/lib/client";
import { BlogMain } from "@/components/blog/BlogMain";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  featuredImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  lang: string;
}

interface BlogPageProps {
  searchParams: Promise<{
    sort?: "newest" | "oldest" | "updated-newest" | "updated-oldest";
  }>;
}

async function getBlogPosts(
  lang: string = "en",
  sortBy: string = "newest"
): Promise<BlogPost[]> {
  let orderBy = "";

  switch (sortBy) {
    case "oldest":
      orderBy = "| order(publishedAt asc)";
      break;
    case "updated-newest":
      orderBy = "| order(updatedAt desc)";
      break;
    case "updated-oldest":
      orderBy = "| order(updatedAt asc)";
      break;
    default:
      orderBy = "| order(publishedAt desc)";
  }

  const query = `*[_type == "blog" && lang == $lang && isPublished == true] ${orderBy} {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage {
      "asset": {
        "url": asset->url
      },
      alt
    },
    publishedAt,
    updatedAt,
    tags,
    lang
  }`;

  return await client.fetch(query, { lang }, { next: { revalidate: 300 } });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { sort } = await searchParams;
  const sortBy = sort || "newest";
  const blogPosts = await getBlogPosts("en", sortBy);

  return (
    <div className="mt-14 min-h-screen w-full max-w-6xl mx-auto px-4 py-8 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-josefin mb-6 text-light-cyan">
            Blog
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology,
            and more.
          </p>
        </div>

        <BlogMain posts={blogPosts} currentSort={sortBy} />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title:
      "Karsten Tauchert - Blog about thoughts and insights about development, technology and more",
    description:
      "Read my latest thoughts on web development, technology, and programming. Tutorials, insights, and personal experiences from a full-stack developer.",
    openGraph: {
      title: "Blog - Karsten Tauchert",
      description:
        "Read my latest thoughts on web development, technology, and programming.",
      type: "website",
    },
  };
}
