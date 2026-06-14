"use client";

export default function SearchFilters() {
  const filters = ["All", "Documents", "Summaries", "Chats"];

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((item) => (
        <button
          key={item}
          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
