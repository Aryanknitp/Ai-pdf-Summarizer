import { NextResponse } from "next/server";
import {
  callPythonAPI,
} from "@/lib/pythonClient";

export async function POST(
  request
) {
  const body =
    await request.json();

  return NextResponse.json({
    success: true,
    message:
      "AI Chat endpoint ready",
    payload: body,
  });
}