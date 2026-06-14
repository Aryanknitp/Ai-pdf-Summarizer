export default function ProfileCard({ user }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex flex-col items-center">
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-slate-700"
        />

        <h2 className="mt-4 text-2xl font-bold">
          {user?.name || "User"}
        </h2>

        <p className="text-slate-400 mt-1 text-center break-all">
          {user?.email}
        </p>

        <div className="mt-4 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm">
          AI PDF User
        </div>
      </div>
    </div>
  );
}