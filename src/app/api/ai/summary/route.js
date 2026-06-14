import { NextResponse } from "next/server";
import {
  callPythonAPI,
} from "@/lib/pythonClient";

export async function POST(
  request
) {
  const body =
    await request.json();

  // Future:
  // const result =
  //   await callPythonAPI(
  //     "/summary",
  //     body
  //   );

  return NextResponse.json({
    success: true,
    message:
      "AI Summary endpoint ready",
    payload: body,
  });
}