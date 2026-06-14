export async function saveUploadedFile(
  file
) {
  // Placeholder
  // Later integrate local storage / S3 / Cloudinary

  return {
    fileUrl:
      "/uploads/" +
      file.name,
    originalName:
      file.name,
    fileSize:
      file.size,
    mimeType:
      file.type,
  };
}