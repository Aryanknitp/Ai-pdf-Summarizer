"use client";

import ProfileSettings from "@/components/settings/ProfileSettings";
import PasswordSettings from "@/components/settings/PasswordSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage account preferences.
        </p>
      </div>

      <ProfileSettings />
      <PasswordSettings />
      <NotificationSettings />
      <DangerZone />
    </div>
  );
}