import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const question = body?.question || "";

  return NextResponse.json({
    success: true,
    message: "AI chat responded locally",
    payload: body,
    answer: question
      ? `Prototype chat response: ${question}`
      : "Please ask a question about your document.",
  });
}