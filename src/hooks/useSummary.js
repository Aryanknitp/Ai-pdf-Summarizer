"use client";

import {
  useState,
  useEffect,
} from "react";

import {
  getSummary,
} from "@/services/summaryService";

export function useSummary(
  documentId
) {
  const [summary, setSummary] =
    useState("");

  const [
    keyPoints,
    setKeyPoints,
  ] = useState([]);

  const [
    importantDates,
    setImportantDates,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    if (documentId) {
      loadSummary();
    }
  }, [documentId]);

  const loadSummary =
    async () => {
      try {
        setLoading(true);

        const data =
          await getSummary(
            documentId
          );

        setSummary(
          data.summary ||
            ""
        );

        setKeyPoints(
          data.keyPoints ||
            []
        );

        setImportantDates(
          data.importantDates ||
            []
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  return {
    summary,
    keyPoints,
    importantDates,
    loading,
    error,
    refreshSummary:
      loadSummary,
  };
}