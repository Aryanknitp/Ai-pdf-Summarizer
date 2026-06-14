export default function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-200">
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-slate-400 text-sm">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}