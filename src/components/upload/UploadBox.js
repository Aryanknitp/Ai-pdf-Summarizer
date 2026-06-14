"use client";

export default function UploadBox({
  onFileSelect,
}) {
  const handleChange = (
    e
  ) => {
    if (
      e.target.files &&
      e.target.files[0]
    ) {
      onFileSelect(
        e.target.files[0]
      );
    }
  };

  return (
    <div className="border-2 border-dashed border-slate-700 rounded-2xl p-10 bg-slate-900 text-center">
      <input
        type="file"
        accept=".pdf"
        onChange={
          handleChange
        }
        className="hidden"
        id="pdf-upload"
      />

      <label
        htmlFor="pdf-upload"
        className="cursor-pointer"
      >
        <div className="text-6xl mb-4">
          📄
        </div>

        <h2 className="text-xl font-semibold">
          Click to Upload
        </h2>

        <p className="text-slate-400 mt-2">
          PDF files only
        </p>
      </label>
    </div>
  );
}