import { NextResponse } from "next/server";

import {
  getAnalytics,
} from "@/server/analytics/analyticsService";

import {
  buildAnalyticsResponse,
} from "@/server/analytics/analyticsHelper";

export async function GET() {
  const analytics =
    await getAnalytics(
      "demo-user-id"
    );

  return NextResponse.json({
    success: true,
    data: buildAnalyticsResponse(
      analytics
    ),
  });
}