export function buildActivityMessage(
  type
) {
  const messages = {
    upload: "Uploaded a document",
    summary: "Generated a summary",
    chat: "Asked a question",
  };

  return (
    messages[type] ||
    "Performed an activity"
  );
}