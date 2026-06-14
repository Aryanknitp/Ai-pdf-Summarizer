"use client";

import { useSearchParams } from "next/navigation";
import { useSummary } from "@/hooks/useSummary";

import SummaryCard from "@/components/summary/SummaryCard";
import KeyPointCard from "@/components/summary/KeyPointCard";
import TimelineCard from "@/components/summary/TimelineCard";
import SummaryLoader from "@/components/summary/SummaryLoader";

export default function SummaryPage() {
  const searchParams = useSearchParams();

  const documentId =
    searchParams.get(
      "documentId"
    );

  const {
    summary,
    keyPoints,
    importantDates,
    loading,
  } =
    useSummary(
      documentId
    );

  if (loading) {
    return (
      <SummaryLoader />
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          AI Summary
        </h1>

        <p className="text-slate-400 mt-2">
          AI generated insights from your document.
        </p>
      </div>

      <SummaryCard
        summary={
          summary
        }
      />

      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-5">
          Key Points
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {keyPoints?.map(
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
      </section>

      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-5">
          Important Dates
        </h2>

        <div className="space-y-4">
          {importantDates?.map(
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
      </section>
    </div>
  );
}