"use client";

import Link from "next/link";

export default function RecentUploads({
  documents,
}) {
  if (
    !documents ||
    documents.length === 0
  ) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center text-slate-400">
        No documents found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc._id}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h3 className="font-semibold">
              📄 {doc.filename}
            </h3>

            <p className="text-sm text-slate-400">
              {new Date(
                doc.createdAt
              ).toLocaleDateString()}
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/dashboard/summary?documentId=${doc._id}`}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            >
              Summary
            </Link>

            <Link
              href={`/dashboard/chat?documentId=${doc._id}`}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
            >
              Chat
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}