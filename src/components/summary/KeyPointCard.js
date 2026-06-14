export default function KeyPointCard({
  title,
  description,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <h3 className="text-lg font-semibold text-blue-400">
        {title}
      </h3>

      <p className="text-slate-300 mt-3">
        {description}
      </p>
    </div>
  );
}