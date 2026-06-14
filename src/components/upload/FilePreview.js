export default function FilePreview({
  file,
}) {
  return (
    <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="font-semibold">
        Selected File
      </h3>

      <p className="mt-2">
        📄 {file.name}
      </p>

      <p className="text-slate-400 text-sm">
        {(
          file.size /
          1024 /
          1024
        ).toFixed(2)}{" "}
        MB
      </p>
    </div>
  );
}