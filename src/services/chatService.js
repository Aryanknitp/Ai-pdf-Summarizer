import apiClient from "@/services/apiClient";

export const getChatHistory = async (documentId) => {
  const response = await apiClient.get(`/chat/${documentId}`);
  const messages = response.data?.messages ?? response.data?.data ?? [];
  return { messages };
};

export const sendMessage = async (documentId, message) => {
  const response = await apiClient.post("/chat", {
    documentId,
    question: message,
  });

  return response.data;
};