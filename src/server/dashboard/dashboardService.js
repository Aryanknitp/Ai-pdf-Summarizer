import prisma from "@/lib/prisma";

function shouldUseFallback(error) {
  const message = error?.message || "";
  const code = error?.code || "";

  return (
    code === "P2021" ||
    code === "P1001" ||
    code === "P2022" ||
    code === "P2023" ||
    code.startsWith("P") ||
    message.includes("DATABASE_URL") ||
    message.includes("AuthenticationFailed") ||
    message.includes("SCRAM") ||
    message.includes("ECONN") ||
    message.includes("timed out") ||
    message.includes("connect")
  );
}

export async function getDashboardStats(userId) {
  try {
    const [totalDocuments, totalSummaries, totalChats] = await Promise.all([
      prisma.document.count({ where: { uploadedBy: userId } }),
      prisma.summary.count(),
      prisma.chat.count(),
    ]);

    return { totalDocuments, totalSummaries, totalChats };
  } catch (error) {
    if (shouldUseFallback(error)) {
      return { totalDocuments: 0, totalSummaries: 0, totalChats: 0 };
    }
    throw error;
  }
}