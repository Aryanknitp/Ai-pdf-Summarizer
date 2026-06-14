export default function ActivityCard({
  activity,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition-all duration-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {activity?.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {activity?.description}
          </p>
        </div>

        <span className="text-xs text-slate-500 whitespace-nowrap">
          {activity?.createdAt
            ? new Date(
                activity.createdAt
              ).toLocaleString()
            : ""}
        </span>
      </div>
    </div>
  );
}