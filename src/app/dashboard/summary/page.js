"use client";

import { useSearchParams } from "next/navigation";

import { useSummary } from "@/hooks/useSummary";

import SummaryCard from "@/components/summary/SummaryCard";
import KeyPointCard from "@/components/summary/KeyPointCard";
import TimelineCard from "@/components/summary/TimelineCard";

import Loader from "@/components/common/Loader";
import EmptyState from "@/components/common/EmptyState";

export default function SummaryPage() {
  const searchParams =
    useSearchParams();

  const documentId =
    searchParams.get(
      "documentId"
    );

  const {
    summary,
    keyPoints,
    importantDates,
    loading,
    error,
  } =
    useSummary(
      documentId
    );

  if (!documentId) {
    return (
      <EmptyState
        title="No Document Selected"
        description="Please select a PDF from the Documents page to view its AI-generated summary."
      />
    );
  }

  if (loading) {
    return (
      <Loader text="Generating AI Summary..." />
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-700 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-red-400">
          Failed to load summary
        </h2>

        <p className="text-slate-300 mt-3">
          {error.message ||
            "Something went wrong while fetching the AI summary."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          AI Summary
        </h1>

        <p className="mt-2 text-slate-400">
          AI generated insights and important information extracted from your uploaded PDF.
        </p>
      </div>

      {/* Summary */}
      <SummaryCard
        summary={summary}
      />

      {/* Key Points */}
      <section>
        <h2 className="text-2xl font-bold mb-5">
          Key Points
        </h2>

        {keyPoints &&
        keyPoints.length >
          0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyPoints.map(
              (
                point,
                index
              ) => (
                <KeyPointCard
                  key={
                    index
                  }
                  title={
                    point.title
                  }
                  description={
                    point.description
                  }
                />
              )
            )}
          </div>
        ) : (
          <EmptyState
            title="No Key Points"
            description="No important key points were extracted from this document."
          />
        )}
      </section>

      {/* Important Dates */}
      <section>
        <h2 className="text-2xl font-bold mb-5">
          Important Dates
        </h2>

        {importantDates &&
        importantDates.length >
          0 ? (
          <div className="space-y-4">
            {importantDates.map(
              (
                item,
                index
              ) => (
                <TimelineCard
                  key={
                    index
                  }
                  date={
                    item.date
                  }
                  event={
                    item.event
                  }
                />
              )
            )}
          </div>
        ) : (
          <EmptyState
            title="No Dates Found"
            description="No important dates were detected in this document."
          />
        )}
      </section>
    </div>
  );
}