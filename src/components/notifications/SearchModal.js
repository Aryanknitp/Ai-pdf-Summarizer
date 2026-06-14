import SearchResultCard from "./SearchResultCard";

export default function SearchModal({
  query,
  setQuery,
  results,
}) {
  return (
    <div className="space-y-6">
      <input
        type="text"
        value={query}
        onChange={(e) =>
          setQuery(
            e.target.value
          )
        }
        placeholder="Search documents, summaries, chats..."
        className="w-full rounded-xl bg-slate-900 border border-slate-800 p-4"
      />

      <div className="space-y-3">
        {results.map((item) => (
          <SearchResultCard
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}