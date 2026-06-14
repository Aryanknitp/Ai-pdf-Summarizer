import { NextResponse } from "next/server";

export function handleError(
  error
) {
  console.error(
    "API Error:",
    error
  );

  return NextResponse.json(
    {
      success: false,
      message:
        error.message ||
        "Internal Server Error",
    },
    {
      status: 500,
    }
  );
}