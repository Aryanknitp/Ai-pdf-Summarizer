export async function callPythonAPI(
  endpoint,
  payload
) {
  try {
    const response =
      await fetch(
        `${process.env.PYTHON_API_URL}${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            payload
          ),
        }
      );

    return await response.json();
  } catch (error) {
    throw new Error(
      "Python AI service unavailable"
    );
  }
}