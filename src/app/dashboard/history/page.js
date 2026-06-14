"use client";

import HistoryTable from "@/components/history/HistoryTable";
import HistoryLoader from "@/components/history/HistoryLoader";

import { useHistory } from "@/hooks/useHistory";

export default function HistoryPage() {
  const {
    history,
    loading,
  } = useHistory();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          AI History
        </h1>

        <p className="text-slate-400 mt-2">
          Browse all previous summaries and AI conversations.
        </p>
      </div>

      {loading ? (
        <HistoryLoader />
      ) : (
        <HistoryTable
          history={history}
        />
      )}
    </div>
  );
}