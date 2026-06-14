"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] =
    useState("");

  return (
    <input
      type="text"
      value={query}
      onChange={(e) =>
        setQuery(
          e.target.value
        )
      }
      placeholder="Search documents..."
      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 mb-6"
    />
  );
}