"use client";

import {
  useState,
} from "react";

export function usePageLoader() {
  const [
    loading,
    setLoading,
  ] = useState(false);

  return {
    loading,
    startLoading:
      () =>
        setLoading(
          true
        ),
    stopLoading:
      () =>
        setLoading(
          false
        ),
  };
}