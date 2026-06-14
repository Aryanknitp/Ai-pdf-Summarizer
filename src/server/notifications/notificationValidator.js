export function validateNotification(
  data
) {
  if (!data.title) {
    throw new Error(
      "Notification title required"
    );
  }

  return true;
}