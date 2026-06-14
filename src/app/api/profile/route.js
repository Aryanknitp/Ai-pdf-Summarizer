import { NextResponse } from "next/server";
import {
  getProfile,
  updateProfile,
} from "@/server/profile/profileService";

export async function GET() {
  const profile =
    await getProfile(
      "demo-user-id"
    );

  return NextResponse.json({
    success: true,
    data: profile,
  });
}

export async function PUT(
  request
) {
  const body =
    await request.json();

  const updated =
    await updateProfile(
      "demo-user-id",
      body
    );

  return NextResponse.json({
    success: true,
    data: updated,
  });
}