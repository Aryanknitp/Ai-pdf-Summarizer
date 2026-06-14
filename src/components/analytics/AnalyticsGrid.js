import StatsCard from "./StatsCard";
import EmptyState from "@/components/common/EmptyState";

export default function AnalyticsGrid({
  analytics,
}) {
  if (!analytics) {
    return (
      <EmptyState
        title="No Analytics Available"
        description="Analytics data will be displayed after you start using the application."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      <StatsCard
        title="Documents"
        value={
          analytics.documents ||
          0
        }
        icon="📄"
      />

      <StatsCard
        title="Summaries"
        value={
          analytics.summaries ||
          0
        }
        icon="📝"
      />

      <StatsCard
        title="Chats"
        value={
          analytics.chats ||
          0
        }
        icon="💬"
      />

      <StatsCard
        title="Storage"
        value={`${analytics.storage || 0} MB`}
        icon="💾"
      />
    </div>
  );
}