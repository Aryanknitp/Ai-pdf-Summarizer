"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Oops!
        </h1>

        <p className="mt-4 text-slate-300">
          Something went wrong while loading this page.
        </p>

        <p className="mt-3 text-sm text-slate-500 break-all">
          {error?.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}