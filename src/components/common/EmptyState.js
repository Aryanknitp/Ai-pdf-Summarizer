export default function EmptyState({
  title = "No Data Found",
  description = "Nothing to display right now.",
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
      <div className="text-6xl">
        📂
      </div>

      <h2 className="mt-5 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
}