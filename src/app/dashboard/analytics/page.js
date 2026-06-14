"use client";

import AnalyticsGrid from "@/components/analytics/AnalyticsGrid";

import { useAnalytics } from "@/hooks/useAnalytics";

export default function AnalyticsPage() {
  const {
    analytics,
    loading,
  } = useAnalytics();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          Overview of your AI PDF usage.
        </p>
      </div>

      <AnalyticsGrid
        analytics={analytics}
      />
    </div>
  );
}