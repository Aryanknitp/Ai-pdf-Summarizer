import { NextResponse } from "next/server";

export async function POST(
  request
) {
  try {
    const formData =
      await request.formData();

    const file =
      formData.get("file");

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "File received successfully",
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
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