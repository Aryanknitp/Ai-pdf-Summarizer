"use client";

import {
  useState,
  useEffect,
} from "react";

import {
  getAllDocuments,
} from "@/services/documentService";

export function useDocuments() {
  const [documents, setDocuments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments =
    async () => {
      try {
        setLoading(true);

        const data =
          await getAllDocuments();

        setDocuments(
          data.documents ||
            []
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  return {
    documents,
    loading,
    error,
    refreshDocuments:
      loadDocuments,
  };
}