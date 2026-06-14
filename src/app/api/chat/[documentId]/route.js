import { NextResponse } from "next/server";

import {
  getChatHistory,
} from "@/server/chat/chatService";

export async function GET(
  request,
  { params }
) {
  const chats =
    await getChatHistory(
      params.documentId
    );

  return NextResponse.json({
    success: true,
    data: chats,
  });
}