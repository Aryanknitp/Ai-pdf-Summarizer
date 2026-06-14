import apiClient from "@/services/apiClient";

export const getNotifications =
  async () => {
    const response =
      await apiClient.get(
        "/notifications"
      );

    return response.data;
  };