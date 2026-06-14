import apiClient from "./apiClient";

export const login = async (data) => {
  const response = await apiClient.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const signup = async (data) => {
  const response = await apiClient.post(
    "/auth/signup",
    data
  );

  return response.data;
};