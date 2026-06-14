"use client";

import { useState } from "react";

export default function NotificationSettings() {
  const [enabled, setEnabled] =
    useState(true);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-5">
        Notification Preferences
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">
            Email Notifications
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            Receive updates about summaries and uploads.
          </p>
        </div>

        <input
          type="checkbox"
          checked={
            enabled
          }
          onChange={() =>
            setEnabled(
              !enabled
            )
          }
          className="w-5 h-5"
        />
      </div>
    </div>
  );
}