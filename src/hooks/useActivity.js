"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getActivities,
} from "@/services/activityService";

export function useActivity() {
  const [
    activities,
    setActivities,
  ] = useState([]);

  const [filter, setFilter] =
    useState("all");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data =
          await getActivities(
            filter
          );

        setActivities(
          data.activities ||
            []
        );
      } finally {
        setLoading(
          false
        );
      }
    }

    loadData();
  }, [filter]);

  return {
    activities,
    loading,
    filter,
    setFilter,
  };
}