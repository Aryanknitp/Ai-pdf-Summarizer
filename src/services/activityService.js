import apiClient from "@/services/apiClient";
// these are need to connecting to backend services
export const getActivities =
  async (
    filter = "all"
  ) => {
    const response =
      await apiClient.get(
        `/activity?filter=${filter}`
      );

    return response.data;
  };