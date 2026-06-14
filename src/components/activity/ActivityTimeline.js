import ActivityCard from "./ActivityCard";
import EmptyState from "@/components/common/EmptyState";

export default function ActivityTimeline({
  activities = [],
}) {
  if (
    !activities ||
    activities.length === 0
  ) {
    return (
      <EmptyState
        title="No Activity Found"
        description="Your uploads, summaries and chats will appear here."
      />
    );
  }

  return (
    <div className="space-y-4">
      {activities.map(
        (activity) => (
          <ActivityCard
            key={
              activity._id
            }
            activity={
              activity
            }
          />
        )
      )}
    </div>
  );
}