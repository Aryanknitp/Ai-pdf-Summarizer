import { NextResponse } from "next/server";
import { createDocument } from "@/server/documents/documentService";
import { getCurrentUser } from "@/lib/auth";

export async function POST(request) {
  try {
    const user = getCurrentUser(request);

    if (!user?.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    const fileName = file.name || "document.pdf";
    const fileSize = file.size || 0;
    const fileType = file.type || "application/pdf";

    const document = await createDocument({
      title: fileName,
      originalName: fileName,
      fileUrl: `/uploads/${fileName}`,
      fileSize,
      mimeType: fileType,
      uploadedBy: user.id,
      metadata: {
        uploadedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "File received and stored successfully",
      document,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}