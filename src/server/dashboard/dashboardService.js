import prisma from "@/lib/prisma";

export async function getDashboardStats(
  userId
) {
  const totalDocuments =
    await prisma.document.count({
      where: {
        uploadedBy: userId,
      },
    });

  const totalSummaries =
    await prisma.summary.count();

  const totalChats =
    await prisma.chat.count();

  return {
    totalDocuments,
    totalSummaries,
    totalChats,
  };
}