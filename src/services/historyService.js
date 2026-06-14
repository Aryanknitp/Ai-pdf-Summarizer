import apiClient from "@/services/apiClient";

export const getHistory =
  async () => {
    const response =
      await apiClient.get(
        "/history"
      );

    return response.data;
  };