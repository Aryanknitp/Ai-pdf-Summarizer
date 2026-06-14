export function validateChat(
  data
) {
  if (!data.question) {
    throw new Error(
      "Question cannot be empty"
    );
  }

  return true;
}