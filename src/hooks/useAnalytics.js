"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getAnalytics,
} from "@/services/analyticsService";

export function useAnalytics() {
  const [
    analytics,
    setAnalytics,
  ] = useState({});

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        const data =
          await getAnalytics();

        setAnalytics(
          data
        );
      } finally {
        setLoading(
          false
        );
      }
    }

    loadAnalytics();
  }, []);

  return {
    analytics,
    loading,
  };
}