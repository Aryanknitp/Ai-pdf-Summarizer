"use client";

import { useEffect } from "react";
import SearchBar from "@/components/search/SearchBar";
import SearchResults from "@/components/search/SearchResults";
import SearchLoader from "@/components/search/SearchLoader";
import useSearch from "@/hooks/useSearch";

export default function SearchPage() {
  const {
    query,
    setQuery,
    results,
    loading,
    search,
  } = useSearch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      search();
    }, 300);

    return () =>
      clearTimeout(timeout);
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Search
        </h1>

        <p className="text-slate-400 mt-2">
          Search across your PDFs,
          summaries and AI chats.
        </p>
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
      />

      {loading ? (
        <SearchLoader />
      ) : (
        <SearchResults
          results={results}
        />
      )}
    </div>
  );
}