export default function HistoryLoader() {
  return (
    <div className="space-y-3 animate-pulse">
      {[1, 2, 3, 4, 5].map(
        (item) => (
          <div
            key={item}
            className="h-16 bg-slate-900 border border-slate-800 rounded-xl"
          />
        )
      )}
    </div>
  );
}