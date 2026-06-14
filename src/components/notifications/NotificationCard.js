export default function NotificationCard({
  notification,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="font-semibold">
        {notification.title}
      </h3>

      <p className="text-slate-400 mt-2">
        {notification.message}
      </p>
    </div>
  );
}