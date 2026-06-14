export default function UserStats({ stats }) {
  const cards = [
    {
      title: "Documents",
      value: stats?.documents || 0,
      icon: "📄",
    },
    {
      title: "Summaries",
      value: stats?.summaries || 0,
      icon: "📝",
    },
    {
      title: "Chats",
      value: stats?.chats || 0,
      icon: "💬",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {cards.map((item) => (
        <div
          key={item.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
        >
          <div className="text-3xl">
            {item.icon}
          </div>

          <h3 className="text-slate-400 mt-3">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}