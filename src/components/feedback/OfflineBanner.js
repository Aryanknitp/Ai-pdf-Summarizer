"use client";

import { useNetwork } from "@/hooks/useNetwork";

export default function OfflineBanner() {
  const online =
    useNetwork();

  if (online) {
    return null;
  }

  return (
    <div className="bg-red-600 text-center py-2 text-sm">
      You are currently offline.
    </div>
  );
}