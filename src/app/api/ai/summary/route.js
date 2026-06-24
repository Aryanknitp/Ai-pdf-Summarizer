import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const documentId = body?.documentId || "demo-document";

  return NextResponse.json({
    success: true,
    message: "AI summary generated locally",
    payload: body,
    summary: `This is a local prototype summary for ${documentId}. It demonstrates the AI summary flow without requiring the external Python service.`,
  });
}