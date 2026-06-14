import apiClient from "@/services/apiClient";

export const getPreferences =
  async () => {
    const response =
      await apiClient.get(
        "/preferences"
      );

    return response.data;
  };