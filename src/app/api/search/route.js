import { NextResponse } from "next/server";

import {
  globalSearch,
} from "@/server/search/searchService";

export async function GET(
  request
) {
  const {
    searchParams,
  } = new URL(
    request.url
  );

  const query =
    searchParams.get("q") ||
    "";

  const result =
    await globalSearch(
      query
    );

  return NextResponse.json({
    success: true,
    data: result,
  });
}