"use client";

import { useState } from "react";

export default function AvatarUploader() {
  const [fileName, setFileName] =
    useState("");

  const handleFileChange = (
    e
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    // Later:
    // const formData = new FormData();
    // formData.append("avatar", file);
    // await uploadAvatar(formData);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Update Profile Picture
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-slate-400
        file:mr-4
        file:py-2
        file:px-4
        file:rounded-lg
        file:border-0
        file:bg-blue-600
        file:text-white
        hover:file:bg-blue-700"
      />

      {fileName && (
        <p className="mt-4 text-sm text-slate-400">
          Selected: {fileName}
        </p>
      )}
    </div>
  );
}