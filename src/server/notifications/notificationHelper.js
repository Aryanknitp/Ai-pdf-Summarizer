export function buildNotification(
  title,
  message,
  type = "info"
) {
  return {
    title,
    message,
    type,
  };
}