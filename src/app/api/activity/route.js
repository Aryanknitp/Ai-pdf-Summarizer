import { NextResponse } from "next/server";

import {
  getUserActivities,
} from "@/server/activity/activityService";

export async function GET() {
  try {
    const activities =
      await getUserActivities(
        "demo-user-id"
      );

    return NextResponse.json({
      success: true,
      data: activities,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}