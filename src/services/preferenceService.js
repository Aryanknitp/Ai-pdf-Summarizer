import apiClient from "./apiClient";

export const getPreferences = async () => {
  const response = await apiClient.get(
    "/preferences"
  );

  return response.data;
};

export const updatePreferences = async (
  data
) => {
  const response =
    await apiClient.put(
      "/preferences",
      data
    );

  return response.data;
};