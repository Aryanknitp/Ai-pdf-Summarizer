"use client";

import { useState } from "react";
import UploadBox from "@/components/upload/UploadBox";
import FilePreview from "@/components/upload/FilePreview";
import UploadProgress from "@/components/upload/UploadProgress";
import { uploadPdf } from "@/services/uploadService";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] =
    useState(null);

  const [uploading, setUploading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData =
      new FormData();

    formData.append(
      "file",
      selectedFile
    );

    try {
      setUploading(true);

      await uploadPdf(
        formData,
        (event) => {
          const percent =
            Math.round(
              (event.loaded * 100) /
                event.total
            );

          setProgress(
            percent
          );
        }
      );

      setSelectedFile(
        null
      );

      setProgress(0);
    } catch (error) {
      console.error(
        error
      );
    } finally {
      setUploading(
        false
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          Upload PDF
        </h1>

        <p className="text-slate-400 mt-2">
          Upload your document and let AI summarize it.
        </p>
      </div>

      <UploadBox
        onFileSelect={
          setSelectedFile
        }
      />

      {selectedFile && (
        <FilePreview
          file={
            selectedFile
          }
        />
      )}

      {uploading && (
        <UploadProgress
          progress={
            progress
          }
        />
      )}

      <button
        disabled={
          !selectedFile ||
          uploading
        }
        onClick={
          handleUpload
        }
        className="mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 px-6 py-3 rounded-xl"
      >
        Upload PDF
      </button>
    </div>
  );
}