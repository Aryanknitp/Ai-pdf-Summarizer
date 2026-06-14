"use client";

export default function SearchHistory({
  history = [],
  onSelect,
}) {
  if (!history.length) return null;

  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <h3 className="font-semibold mb-3">
        Recent Searches
      </h3>

      <div className="flex flex-wrap gap-2">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className="px-3 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}