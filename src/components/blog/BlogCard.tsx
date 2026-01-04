import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";

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

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link href={`/blog/${post.slug.current}`}>
        {/* Featured Image */}
        {post.featuredImage ? (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={post.featuredImage.asset.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">
              {post.title.charAt(0).toUpperCase()}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(post.publishedAt)}
            </div>
            {post.updatedAt && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {formatDate(post.updatedAt)}
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold font-josefin text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md text-xs">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Read More */}
          <div className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
            Read more →
          </div>
        </div>
      </Link>
    </article>
  );
}
