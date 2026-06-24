import { NextResponse } from "next/server";
import { getRecentDocuments } from "@/server/documents/documentService";
import { getCurrentUser } from "@/lib/auth";

export async function GET(request) {
  const user = getCurrentUser(request);

  if (!user?.id) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const documents = await getRecentDocuments(user.id);

  return NextResponse.json({ success: true, data: documents });
}