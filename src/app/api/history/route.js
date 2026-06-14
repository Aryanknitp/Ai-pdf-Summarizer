import { NextResponse } from "next/server";

import {
  getHistory,
} from "@/server/history/historyService";

export async function GET() {
  const history =
    await getHistory(
      "demo-user-id"
    );

  return NextResponse.json({
    success: true,
    data: history,
  });
}