import apiClient from "./apiClient";

export const searchDocuments =
  async (query) => {
    const response =
      await apiClient.get(
        `/search?q=${encodeURIComponent(
          query
        )}`
      );

    return response.data;
  };