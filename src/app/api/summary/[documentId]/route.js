import { NextResponse } from "next/server";
import { getSummaryByDocumentId } from "@/server/summary/summaryService";

export async function GET(request, { params }) {
  const summary = await getSummaryByDocumentId(params.documentId);

  return NextResponse.json({
    success: true,
    summary: summary?.content || "",
    keyPoints: [],
    importantDates: [],
    summaryRecord: summary,
  });
}