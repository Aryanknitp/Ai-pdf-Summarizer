"use client";

import Link from "next/link";

export default function DocumentCard({
  document,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 className="font-semibold text-lg">
          📄{" "}
          {
            document.filename
          }
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Uploaded:{" "}
          {new Date(
            document.createdAt
          ).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/dashboard/summary?documentId=${document._id}`}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          Summary
        </Link>

        <Link
          href={`/dashboard/chat?documentId=${document._id}`}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
        >
          Chat
        </Link>
      </div>
    </div>
  );
}