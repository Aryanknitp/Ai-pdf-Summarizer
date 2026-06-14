import NotificationCard from "./NotificationCard";
import EmptyState from "@/components/common/EmptyState";

export default function NotificationList({
  notifications,
}) {
  if (
    !notifications ||
    notifications.length === 0
  ) {
    return (
      <EmptyState
        title="No Notifications"
        description="You don't have any notifications yet."
      />
    );
  }

  return (
    <div className="space-y-4">
      {notifications.map(
        (item) => (
          <NotificationCard
            key={item._id}
            notification={item}
          />
        )
      )}
    </div>
  );
}