import apiClient from "@/services/apiClient";

export const getSummary = async (documentId) => {
  const response = await apiClient.get(`/summary/${documentId}`);

  return response.data?.summary !== undefined
    ? response.data
    : {
        summary: response.data?.data?.content || "",
        keyPoints: [],
        importantDates: [],
      };
};