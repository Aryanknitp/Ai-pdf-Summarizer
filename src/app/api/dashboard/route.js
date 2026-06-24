import { NextResponse } from "next/server";
import { getDashboardStats } from "@/server/dashboard/dashboardService";
import { getCurrentUser } from "@/lib/auth";

export async function GET(request) {
  try {
    const user = getCurrentUser(request);

    if (!user?.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const stats = await getDashboardStats(user.id);

    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Dashboard failed" },
      { status: 500 }
    );
  }
}