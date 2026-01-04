import { client } from "@/sanity/lib/client";
import BlogPortableText from "@/components/blog/BlogPortableText";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { PortableTextBlock } from "@portabletext/react";

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
  content: PortableTextBlock[];
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  lang: string;
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(
  slug: string,
  lang: string = "en"
): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug && lang == $lang && isPublished == true][0] {
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
    content,
    publishedAt,
    updatedAt,
    tags,
    lang
  }`;

  return await client.fetch(
    query,
    { slug, lang },
    { next: { revalidate: 300 } }
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={post.featuredImage.asset.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-josefin text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-12 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Published: {formatDate(post.publishedAt)}
            </div>
            {post.updatedAt && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Updated: {formatDate(post.updatedAt)}
              </div>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-12">
              <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <BlogPortableText value={post.content} />
          </div>

          {/* Back to Blog Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/blog"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Kai Tauchert`,
    description: post.excerpt || `Read "${post.title}" on Kai Tauchert's blog`,
    openGraph: {
      title: post.title,
      description:
        post.excerpt || `Read "${post.title}" on Kai Tauchert's blog`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.featuredImage ? [post.featuredImage.asset.url] : [],
    },
  };
}

// Generate static params for better performance
export async function generateStaticParams() {
  const query = `*[_type == "blog" && isPublished == true] {
    "slug": slug.current
  }`;

  const posts = await client.fetch(query);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
