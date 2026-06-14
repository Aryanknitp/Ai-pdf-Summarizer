"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getHistory,
} from "@/services/historyService";

export function useHistory() {
  const [history, setHistory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadHistory() {
      try {
        const data =
          await getHistory();

        setHistory(
          data.history ||
            []
        );
      } finally {
        setLoading(
          false
        );
      }
    }

    loadHistory();
  }, []);

  return {
    history,
    loading,
  };
}