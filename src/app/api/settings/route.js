import { NextResponse } from "next/server";
import {
  getSettings,
  updateSettings,
} from "@/server/settings/settingsService";

export async function GET() {
  const settings =
    await getSettings(
      "demo-user-id"
    );

  return NextResponse.json({
    success: true,
    data: settings,
  });
}

export async function PUT(
  request
) {
  const body =
    await request.json();

  const settings =
    await updateSettings(
      "demo-user-id",
      body
    );

  return NextResponse.json({
    success: true,
    data: settings,
  });
}