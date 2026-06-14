import apiClient from "@/services/apiClient";

export const getSummary =
  async (
    documentId
  ) => {
    const response =
      await apiClient.get(
        `/summary/${documentId}`
      );

    return response.data;
  };