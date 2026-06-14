export default function ActivityLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3, 4].map(
        (item) => (
          <div
            key={item}
            className="h-24 bg-slate-900 border border-slate-800 rounded-2xl"
          />
        )
      )}
    </div>
  );
}