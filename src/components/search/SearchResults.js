"use client";

import SearchResultCard from "./SearchResultCard";
import EmptyState from "@/components/common/EmptyState";

export default function SearchResults({
  results = [],
}) {
  if (!results.length) {
    return (
      <EmptyState
        title="No Results"
        description="Try searching with different keywords."
      />
    );
  }

  return (
    <div className="space-y-3 max-h-[450px] overflow-y-auto">
      {results.map((item) => (
        <SearchResultCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}