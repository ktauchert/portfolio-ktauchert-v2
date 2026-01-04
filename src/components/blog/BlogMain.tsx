import { BlogCard } from "./BlogCard";
import { BlogFilters } from "./BlogFilters";

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

interface BlogMainProps {
  posts: BlogPost[];
  currentSort: string;
}

export function BlogMain({ posts, currentSort }: BlogMainProps) {
  return (
    <div className="space-y-8">
      <BlogFilters currentSort={currentSort} />

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            No blog posts found. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
