export function validateSettings(
  data
) {
  if (
    data.notifications !==
      undefined &&
    typeof data.notifications !==
      "boolean"
  ) {
    throw new Error(
      "Invalid notification setting"
    );
  }

  return true;
}