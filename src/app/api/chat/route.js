import { NextResponse } from "next/server";
import { saveChat } from "@/server/chat/chatService";
import { getCurrentUser } from "@/lib/auth";

export async function POST(request) {
  try {
    const user = getCurrentUser(request);

    if (!user?.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const question = body?.question || body?.message || "";
    const documentId = body?.documentId || "demo-document";
    const answer = question
      ? `AI response for "${question}" on document ${documentId}`
      : "Please ask a question about your uploaded document.";

    const chatRecord = await saveChat({
      documentId,
      question,
      answer,
      metadata: {
        createdAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({
      success: true,
      question,
      answer,
      chatRecord,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Chat failed" },
      { status: 500 }
    );
  }
}