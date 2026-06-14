export function buildAnalyticsResponse(
  data
) {
  return {
    totalUploads:
      data.uploads,
    totalSummaries:
      data.summaries,
    totalChats:
      data.chats,
  };
}