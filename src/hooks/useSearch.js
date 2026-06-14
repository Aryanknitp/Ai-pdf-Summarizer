"use client";

import { useState } from "react";

export default function useSearch() {
  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const search = async () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      // TODO:
      // Call searchService.search(query)
      // Replace dummy data below.

      setResults([
        {
          id: 1,
          title: "Machine Learning Notes",
          description:
            "Introduction to ML algorithms and concepts.",
        },
        {
          id: 2,
          title: "AI Summary Report",
          description:
            "Generated summary for uploaded PDF.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    results,
    loading,
    search,
  };
}