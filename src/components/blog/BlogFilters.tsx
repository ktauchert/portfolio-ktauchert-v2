"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";

interface BlogFiltersProps {
  currentSort: string;
}

export function BlogFilters({ currentSort }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortOptions = [
    { value: "newest", label: "Latest Published" },
    { value: "oldest", label: "Oldest Published" },
    { value: "updated-newest", label: "Recently Updated" },
    { value: "updated-oldest", label: "Oldest Updated" },
  ];

  const handleSortChange = (sortValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (sortValue === "newest") {
      params.delete("sort");
    } else {
      params.set("sort", sortValue);
    }

    const queryString = params.toString();
    router.push(`/blog${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-white" />
        <span className="text-white font-medium">Sort by:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSortChange(option.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currentSort === option.value
                ? "bg-orange text-black shadow-lg"
                : "bg-white text-black  hover:bg-light-cyan hover:cursor-pointer "
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
