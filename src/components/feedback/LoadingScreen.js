export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-xl font-semibold">
          Loading...
        </h2>

        <p className="mt-2 text-slate-400">
          Please wait while we prepare your workspace.
        </p>
      </div>
    </div>
  );
}