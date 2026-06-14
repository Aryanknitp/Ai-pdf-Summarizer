export default function SummaryLoader() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 w-64 bg-slate-800 rounded-lg" />

      <div className="h-40 bg-slate-900 rounded-2xl" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-32 bg-slate-900 rounded-xl" />
        <div className="h-32 bg-slate-900 rounded-xl" />
      </div>
    </div>
  );
}