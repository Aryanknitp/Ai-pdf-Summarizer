import apiClient from "@/services/apiClient";

export const loginUser = async (
  data
) => {
  const response =
    await apiClient.post(
      "/auth/login",
      data
    );

  return response.data;
};

export const signupUser =
  async (data) => {
    const response =
      await apiClient.post(
        "/auth/signup",
        data
      );

    return response.data;
  };

export const getCurrentUser =
  async () => {
    const response =
      await apiClient.get(
        "/auth/me"
      );

    return response.data;
  };

export const updateProfile =
  async (data) => {
    const response =
      await apiClient.put(
        "/auth/profile",
        data
      );

    return response.data;
  };

export const changePassword =
  async (data) => {
    const response =
      await apiClient.put(
        "/auth/password",
        data
      );

    return response.data;
  };

export const logoutUser =
  async () => {
    const response =
      await apiClient.post(
        "/auth/logout"
      );

    return response.data;
  };