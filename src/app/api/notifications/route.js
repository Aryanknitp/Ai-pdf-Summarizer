import { NextResponse } from "next/server";

import {
  getNotifications,
} from "@/server/notifications/notificationService";

export async function GET() {
  const notifications =
    await getNotifications(
      "demo-user-id"
    );

  return NextResponse.json({
    success: true,
    data: notifications,
  });
}