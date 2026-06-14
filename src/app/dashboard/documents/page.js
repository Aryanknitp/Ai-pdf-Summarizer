"use client";

import {
  useEffect,
  useState,
} from "react";

import DocumentList from "@/components/documents/DocumentList";
import SearchBar from "@/components/documents/SearchBar";
import {
  getAllDocuments,
} from "@/services/documentService";

export default function DocumentsPage() {
  const [documents, setDocuments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadDocuments() {
      try {
        const response =
          await getAllDocuments();

        setDocuments(
          response.documents ||
            []
        );
      } catch (error) {
        console.log(
          error
        );
      } finally {
        setLoading(
          false
        );
      }
    }

    loadDocuments();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          My Documents
        </h1>

        <p className="text-slate-400 mt-2">
          View and manage uploaded PDFs.
        </p>
      </div>

      <SearchBar />

      {loading ? (
        <div className="mt-8">
          Loading...
        </div>
      ) : (
        <DocumentList
          documents={
            documents
          }
        />
      )}
    </div>
  );
}