export function formatFileSize(bytes) {
  if (!bytes) return "0 KB";

  return (
    (bytes / 1024).toFixed(2) +
    " KB"
  );
}

export function getFileExtension(
  filename
) {
  return filename
    .split(".")
    .pop();
}