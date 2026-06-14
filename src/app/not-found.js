import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}