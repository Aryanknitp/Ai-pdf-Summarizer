import { NextResponse } from "next/server";
import {
  getRecentDocuments,
} from "@/server/documents/documentService";

export async function GET() {
  const documents =
    await getRecentDocuments();

  return NextResponse.json({
    success: true,
    data: documents,
  });
}