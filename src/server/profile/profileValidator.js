export function validateProfile(
  data
) {
  if (!data.name) {
    throw new Error(
      "Name is required"
    );
  }

  return true;
}