import { NextResponse } from "next/server";
import { getDashboardStats } from "@/server/dashboard/dashboardService";

export async function GET() {
  try {
    const stats =
      await getDashboardStats(
        "demo-user-id"
      );

    return NextResponse.json({
      success: true,
      data: stats,
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