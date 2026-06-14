"use client";

import {
  useState,
} from "react";

export function useSearch() {
  const [query, setQuery] =
    useState("");

  const [results] =
    useState([]);

  return {
    query,
    setQuery,
    results,
  };
}