import apiClient from "@/services/apiClient";

export const getChatHistory =
  async (
    documentId
  ) => {
    const response =
      await apiClient.get(
        `/chat/${documentId}`
      );

    return response.data;
  };

export const sendMessage =
  async (
    documentId,
    message
  ) => {
    const response =
      await apiClient.post(
        "/chat",
        {
          documentId,
          message,
        }
      );

    return response.data;
  };