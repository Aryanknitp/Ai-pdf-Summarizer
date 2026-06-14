import prisma from "@/lib/prisma";

export async function getAnalytics(
  userId
) {
  const uploads =
    await prisma.document.count({
      where: {
        uploadedBy: userId,
      },
    });

  const summaries =
    await prisma.summary.count();

  const chats =
    await prisma.chat.count();

  return {
    uploads,
    summaries,
    chats,
  };
}