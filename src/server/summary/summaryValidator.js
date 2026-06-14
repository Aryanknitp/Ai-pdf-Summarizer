export function validateSummary(
  data
) {
  if (!data.documentId) {
    throw new Error(
      "Document ID required"
    );
  }

  return true;
}