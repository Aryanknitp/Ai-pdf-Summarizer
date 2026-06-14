export function validateActivity(data) {
  if (!data.type) {
    throw new Error(
      "Activity type required"
    );
  }

  return true;
}