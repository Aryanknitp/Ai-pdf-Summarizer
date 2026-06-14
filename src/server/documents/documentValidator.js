export function validateDocument(data) {
  if (!data.title) {
    throw new Error(
      "Document title is required"
    );
  }

  if (!data.fileUrl) {
    throw new Error(
      "Document file is required"
    );
  }

  return true;
}