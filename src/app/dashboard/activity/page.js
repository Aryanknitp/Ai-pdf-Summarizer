"use client";

import ActivityTimeline from "@/components/activity/ActivityTimeline";
import FilterBar from "@/components/activity/FilterBar";
import ActivityLoader from "@/components/activity/ActivityLoader";

import { useActivity } from "@/hooks/useActivity";

export default function ActivityPage() {
  const {
    activities,
    loading,
    filter,
    setFilter,
  } = useActivity();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Activity
        </h1>

        <p className="text-slate-400 mt-2">
          Track all actions performed in your workspace.
        </p>
      </div>

      <FilterBar
        value={filter}
        onChange={setFilter}
      />

      {loading ? (
        <ActivityLoader />
      ) : (
        <ActivityTimeline
          activities={activities}
        />
      )}
    </div>
  );
}