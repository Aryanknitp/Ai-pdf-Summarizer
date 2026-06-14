export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-2xl font-bold">
          AI PDF Summarizer
        </h2>

        <p className="mt-2 text-slate-400">
          Loading...
        </p>
      </div>
    </div>
  );
}