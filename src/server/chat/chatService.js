import prisma from "@/lib/prisma";

export async function saveChat(
  data
) {
  return await prisma.chat.create({
    data,
  });
}

export async function getChatHistory(
  documentId
) {
  return await prisma.chat.findMany({
    where: {
      documentId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}