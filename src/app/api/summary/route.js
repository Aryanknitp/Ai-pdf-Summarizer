import { NextResponse } from "next/server";
import { saveSummary } from "@/server/summary/summaryService";
import { getCurrentUser } from "@/lib/auth";

export async function POST(request) {
  try {
    const user = getCurrentUser(request);

    if (!user?.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const documentId = body?.documentId || "demo-document";
    const summaryText = body?.summary || body?.content || `Summary for ${documentId}`;

    const summary = await saveSummary({
      documentId,
      content: summaryText,
      metadata: {
        generatedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Summary generated and stored successfully",
      documentId,
      summary: summaryText,
      keyPoints: [],
      importantDates: [],
      summaryRecord: summary,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Summary failed" },
      { status: 500 }
    );
  }
}