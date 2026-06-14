import { NextResponse } from "next/server";
import {
  getAllDocuments,
} from "@/server/documents/documentService";

export async function GET() {
  try {
    const documents =
      await getAllDocuments();

    return NextResponse.json({
      success: true,
      data: documents,
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