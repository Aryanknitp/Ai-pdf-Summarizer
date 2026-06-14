import { NextResponse } from "next/server";

import {
  getPreferences,
  updatePreferences,
} from "@/server/preferences/preferenceService";

export async function GET() {
  const data =
    await getPreferences(
      "demo-user-id"
    );

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function PUT(
  request
) {
  const body =
    await request.json();

  const result =
    await updatePreferences(
      "demo-user-id",
      body
    );

  return NextResponse.json({
    success: true,
    data: result,
  });
}