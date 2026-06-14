export default function UsageChart({
  title = "Usage Analytics",
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">
        {title}
      </h2>

      <div className="h-72 border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center">
        <p className="text-slate-500 text-center px-4">
          Chart component placeholder.
          <br />
          Later you can connect this to
          Chart.js or Recharts using
          analytics data from your backend.
        </p>
      </div>
    </div>
  );
}