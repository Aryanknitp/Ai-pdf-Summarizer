import apiClient from "@/services/apiClient";

export const uploadPdf =
  async (
    formData,
    onUploadProgress
  ) => {
    const response =
      await apiClient.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
          onUploadProgress,
        }
      );

    return response.data;
  };