import {
  NextResponse,
} from "next/server";

import {
  loginUser,
} from "@/server/services/authService";

import {
  generateToken,
} from "@/lib/jwt";

export async function POST(
  request
) {
  try {
    const body =
      await request.json();

    const user =
      await loginUser(
        body
      );

    const token =
      generateToken({
        id: user.id,
        email:
          user.email,
      });

    return NextResponse.json({
      success: true,
      message:
        "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email:
          user.email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 401,
      }
    );
  }
}