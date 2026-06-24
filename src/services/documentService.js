import apiClient from "@/services/apiClient";

export const getDashboardStats = async () => {
  const response = await apiClient.get("/dashboard");
  return response.data?.data ?? response.data?.stats ?? response.data ?? {};
};

export const getRecentDocuments = async () => {
  const response = await apiClient.get("/documents/recent");
  const documents = response.data?.documents ?? response.data?.data ?? [];
  return { documents };
};

export const getAllDocuments = async () => {
  const response = await apiClient.get("/documents");
  const documents = response.data?.documents ?? response.data?.data ?? [];
  return { documents };
};

export const getDocumentById = async (documentId) => {
  const response = await apiClient.get(`/documents/${documentId}`);
  return response.data?.document ?? response.data?.data ?? response.data;
};

export const deleteDocument = async (documentId) => {
  const response = await apiClient.delete(`/documents/${documentId}`);
  return response.data;
};

export const searchDocuments = async (query) => {
  const response = await apiClient.get(`/documents/search?q=${encodeURIComponent(query)}`);
  const documents = response.data?.documents ?? response.data?.data ?? [];
  return { documents };
};