"use client";

import {
  logoutUser,
} from "@/services/authService";

export default function DangerZone() {
  const handleLogout =
    async () => {
      try {
        await logoutUser();

        localStorage.removeItem(
          "accessToken"
        );

        window.location.href =
          "/login";
      } catch (error) {
        console.log(
          error
        );
      }
    };

  return (
    <div className="bg-red-950 border border-red-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-red-400">
        Danger Zone
      </h2>

      <p className="mt-3 text-slate-300">
        Logout from your account securely.
      </p>

      <button
        onClick={
          handleLogout
        }
        className="mt-5 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
}