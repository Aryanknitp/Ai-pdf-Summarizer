"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
} from "@/services/notificationService";

export function useNotifications() {
  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data =
          await getNotifications();

        setNotifications(
          data.notifications ||
            []
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return {
    notifications,
    loading,
  };
}