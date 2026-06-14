export default function UploadProgress({
  progress,
}) {
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <span>
          Uploading...
        </span>

        <span>
          {progress}%
        </span>
      </div>

      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}