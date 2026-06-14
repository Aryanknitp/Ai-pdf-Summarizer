import Link from "next/link";

export default function NotFoundScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist.
        </p>
        <p className="mt-4 text-slate-400">
          NotFountScreen Page
        </p>
        <Link
          href="/dashboard"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 rounded-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
