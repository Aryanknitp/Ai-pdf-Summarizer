"use client";

import SearchModal from "@/components/search/SearchModal";
import { useSearch } from "@/hooks/useSearch";

export default function SearchPage() {
  const {
    query,
    setQuery,
    results,
  } = useSearch();

  return (
    <div className="max-w-7xl mx-auto">
      <SearchModal
        query={query}
        setQuery={setQuery}
        results={results}
      />
    </div>
  );
}