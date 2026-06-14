"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getCurrentUser,
} from "@/services/authService";

export function useProfile() {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile =
    async () => {
      try {
        setLoading(true);

        const data =
          await getCurrentUser();

        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  return {
    user,
    loading,
    error,
    refreshProfile:
      loadProfile,
  };
}