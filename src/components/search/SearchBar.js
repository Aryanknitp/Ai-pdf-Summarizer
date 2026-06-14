"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        placeholder="Search documents, summaries or chats..."
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}