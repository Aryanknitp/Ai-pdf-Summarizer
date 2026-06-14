import { NextResponse } from "next/server";

import {
  markAsRead,
} from "@/server/notifications/notificationService";

export async function PATCH(
  request,
  { params }
) {
  const result =
    await markAsRead(
      params.id
    );

  return NextResponse.json({
    success: true,
    data: result,
  });
}