import apiClient from "@/services/apiClient";

export const getAnalytics =
  async () => {
    const response =
      await apiClient.get(
        "/analytics"
      );

    return response.data;
  };