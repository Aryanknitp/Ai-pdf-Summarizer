export default function NotificationLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-24 rounded-xl bg-slate-900"
        />
      ))}
    </div>
  );
}