import { NextResponse } from "next/server";
import {
  searchDocuments,
} from "@/server/documents/documentService";

export async function GET(
  request
) {
  const {
    searchParams,
  } = new URL(
    request.url
  );

  const query =
    searchParams.get("q") ||
    "";

  const documents =
    await searchDocuments(
      query
    );

  return NextResponse.json({
    success: true,
    data: documents,
  });
}