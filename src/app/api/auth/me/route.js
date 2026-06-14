import {
  NextResponse,
} from "next/server";

import {
  getCurrentUser,
} from "@/lib/auth";

export async function GET(
  request
) {
  const user =
    getCurrentUser(
      request
    );

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json({
    success: true,
    user,
  });
}