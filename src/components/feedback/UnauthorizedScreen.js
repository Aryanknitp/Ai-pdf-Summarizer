import Link from "next/link";

export default function UnauthorizedScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="text-center">
        <h1 className="text-6xl">
          🔒
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Unauthorized
        </h2>

        <p className="mt-3 text-slate-400">
          Please login to continue.
        </p>

        <Link
          href="/login"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 rounded-xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
}