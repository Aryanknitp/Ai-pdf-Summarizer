"use client";

import { useState } from "react";

export default function usePreferences() {
  const [loading, setLoading] =
    useState(false);

  const savePreferences = async (
    values
  ) => {
    setLoading(true);

    try {
      // TODO:
      // await updatePreferences(values);

      console.log(
        "Preferences:",
        values
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    savePreferences,
  };
}