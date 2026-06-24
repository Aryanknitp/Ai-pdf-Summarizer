import { NextResponse } from "next/server";
import { getAllDocuments } from "@/server/documents/documentService";
import { getCurrentUser } from "@/lib/auth";

export async function GET(request) {
  try {
    const user = getCurrentUser(request);

    if (!user?.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const documents = await getAllDocuments(user.id);

    return NextResponse.json({ success: true, data: documents });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Documents failed" },
      { status: 500 }
    );
  }
}