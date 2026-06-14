"use client";

import ProfileCard from "@/components/profile/ProfileCard";
import UserStats from "@/components/profile/UserStats";
import AccountInfo from "@/components/profile/AccountInfo";
import AvatarUploader from "@/components/profile/AvatarUploader";

import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
  const { user, loading } =
    useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-80">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          My Profile
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your AI PDF account.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="space-y-6">
          <ProfileCard user={user} />
          <AvatarUploader />
        </div>

        <div className="xl:col-span-2 space-y-6">
          <UserStats stats={user?.stats} />
          <AccountInfo user={user} />
        </div>
      </div>
    </div>
  );
}