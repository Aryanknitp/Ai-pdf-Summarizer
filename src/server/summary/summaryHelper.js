export function trimSummary(
  text,
  maxLength = 300
) {
  if (!text) return "";

  return text.length >
    maxLength
    ? text.slice(
        0,
        maxLength
      ) + "..."
    : text;
}