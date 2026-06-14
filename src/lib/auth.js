import {
  verifyToken,
} from "./jwt";

export function getCurrentUser(
  request
) {
  try {
    const authHeader =
      request.headers.get(
        "authorization"
      );

    if (!authHeader)
      return null;

    const token =
      authHeader.replace(
        "Bearer ",
        ""
      );

    return verifyToken(
      token
    );
  } catch {
    return null;
  }
}