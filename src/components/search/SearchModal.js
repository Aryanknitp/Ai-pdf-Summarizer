"use client";

import { X } from "lucide-react";
import SearchBar from "./SearchBar";
import SearchFilters from "./SearchFilters";
import SearchResults from "./SearchResults";

export default function SearchModal({
  open,
  onClose,
  query,
  setQuery,
  results = [],
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-4">
          <h2 className="text-xl font-bold">
            Search Documents
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <SearchBar
            value={query}
            onChange={setQuery}
          />

          <SearchFilters />

          <SearchResults
            results={results}
          />
        </div>
      </div>
    </div>
  );
}