"use client";

export default function SearchLoader() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((item) => (
        <div
          key={item}
          className="animate-pulse bg-slate-800 rounded-xl h-20"
        />
      ))}
    </div>
  );
}
