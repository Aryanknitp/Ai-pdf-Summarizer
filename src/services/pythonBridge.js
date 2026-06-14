import apiClient from "@/services/apiClient";

export const getPipelineStatus =
  async () => {
    const response =
      await apiClient.get(
        "/pipeline/status"
      );

    return response.data;
  };

export const reprocessDocument =
  async (
    documentId
  ) => {
    const response =
      await apiClient.post(
        "/pipeline/reprocess",
        {
          documentId,
        }
      );

    return response.data;
  };