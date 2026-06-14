export default function AccountInfo({ user }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Account Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-400 text-sm">
            Full Name
          </p>

          <p className="mt-1 text-lg">
            {user?.name || "-"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Email Address
          </p>

          <p className="mt-1 text-lg break-all">
            {user?.email || "-"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Joined Date
          </p>

          <p className="mt-1 text-lg">
            {user?.joinedAt
              ? new Date(
                  user.joinedAt
                ).toLocaleDateString()
              : "-"}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Account Type
          </p>

          <p className="mt-1 text-lg">
            Standard User
          </p>
        </div>
      </div>
    </div>
  );
}