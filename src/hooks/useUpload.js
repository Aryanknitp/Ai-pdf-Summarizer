"use client";

import { useState } from "react";

import {
  uploadPdf,
} from "@/services/uploadService";

export function useUpload() {
  const [loading, setLoading] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [error, setError] =
    useState(null);

  const upload =
    async (formData) => {
      try {
        setLoading(true);
        setError(null);

        const data =
          await uploadPdf(
            formData,
            (
              progressEvent
            ) => {
              const percent =
                Math.round(
                  (progressEvent.loaded *
                    100) /
                    progressEvent.total
                );

              setProgress(
                percent
              );
            }
          );

        return data;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    };

  return {
    loading,
    progress,
    error,
    upload,
  };
}