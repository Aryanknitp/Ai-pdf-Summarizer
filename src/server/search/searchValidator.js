export function validateSearch(
  query
) {
  if (!query) {
    throw new Error(
      "Search query required"
    );
  }

  return true;
}