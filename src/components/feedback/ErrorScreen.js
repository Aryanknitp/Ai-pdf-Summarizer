"use client";

export default function ErrorScreen({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl mb-4">
          ⚠️
        </h1>

        <h2 className="text-3xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-4 text-slate-400">
          {error?.message ||
            "An unexpected error occurred."}
        </p>

        <button
          onClick={() =>
            reset()
          }
          className="mt-8 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}