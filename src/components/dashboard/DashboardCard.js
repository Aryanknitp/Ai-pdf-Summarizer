export default function DashboardCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-slate-400">
        {title}
      </h3>

      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}