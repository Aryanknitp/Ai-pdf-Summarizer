import { NextResponse } from "next/server";

import {
  getDocumentById,
  deleteDocument,
} from "@/server/documents/documentService";

export async function GET(
  request,
  { params }
) {
  const document =
    await getDocumentById(
      params.documentId
    );

  return NextResponse.json({
    success: true,
    data: document,
  });
}

export async function DELETE(
  request,
  { params }
) {
  await deleteDocument(
    params.documentId
  );

  return NextResponse.json({
    success: true,
    message:
      "Document deleted successfully",
  });
}