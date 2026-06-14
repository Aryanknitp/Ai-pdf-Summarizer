import apiClient from "@/services/apiClient";

export const getDashboardStats =
  async () => {
    const response =
      await apiClient.get(
        "/dashboard"
      );

    return response.data;
  };

export const getRecentDocuments =
  async () => {
    const response =
      await apiClient.get(
        "/documents/recent"
      );

    return response.data;
  };

export const getAllDocuments =
  async () => {
    const response =
      await apiClient.get(
        "/documents"
      );

    return response.data;
  };

export const getDocumentById =
  async (
    documentId
  ) => {
    const response =
      await apiClient.get(
        `/documents/${documentId}`
      );

    return response.data;
  };

export const deleteDocument =
  async (
    documentId
  ) => {
    const response =
      await apiClient.delete(
        `/documents/${documentId}`
      );

    return response.data;
  };

export const searchDocuments =
  async (query) => {
    const response =
      await apiClient.get(
        `/documents/search?q=${encodeURIComponent(
          query
        )}`
      );

    return response.data;
  };