"use client";

import { FileText } from "lucide-react";

export default function SearchResultCard({
  item,
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 hover:border-blue-500 transition">
      <div className="flex gap-3">
        <FileText
          size={22}
          className="text-blue-400 mt-1"
        />

        <div className="flex-1">
          <h3 className="font-semibold">
            {item.title}
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}