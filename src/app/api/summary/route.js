import { NextResponse } from "next/server";

export async function POST(
  request
) {
  try {
    const body =
      await request.json();

    return NextResponse.json({
      success: true,
      message:
        "Summary generation started",
      documentId:
        body.documentId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}