"use client";

import NotificationList from "@/components/notifications/NotificationList";
import NotificationLoader from "@/components/notifications/NotificationLoader";
import { useNotifications } from "@/hooks/useNotifications";

export default function NotificationsPage() {
  const {
    notifications,
    loading,
  } = useNotifications();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Notifications
        </h1>

        <p className="mt-2 text-slate-400">
          Stay updated with your AI workspace.
        </p>
      </div>

      {loading ? (
        <NotificationLoader />
      ) : (
        <NotificationList
          notifications={notifications}
        />
      )}
    </div>
  );
}