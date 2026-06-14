"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem(
        "accessToken"
      );

    if (token) {
      setIsAuthenticated(
        true
      );
    } else {
      setIsAuthenticated(
        false
      );
      router.push(
        "/login"
      );
    }

    setLoading(false);
  }, [router]);

  const logout = () => {
    localStorage.removeItem(
      "accessToken"
    );

    router.push(
      "/login"
    );
  };

  return {
    isAuthenticated,
    loading,
    logout,
  };
}