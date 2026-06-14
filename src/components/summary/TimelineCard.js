export default function TimelineCard({
  date,
  event,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
      <div className="text-3xl">
        📅
      </div>

      <div>
        <h3 className="font-semibold">
          {date}
        </h3>

        <p className="text-slate-400 mt-1">
          {event}
        </p>
      </div>
    </div>
  );
}