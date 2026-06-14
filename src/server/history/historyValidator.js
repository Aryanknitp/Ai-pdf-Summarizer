export function validateHistory(data) {
  if (!data.action) {
    throw new Error(
      "History action required"
    );
  }

  return true;
}