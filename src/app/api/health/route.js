import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    status: "OK",
    service: "AI PDF Summarizer Backend",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
}