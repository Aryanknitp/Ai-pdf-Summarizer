import prisma from "@/lib/prisma";

export async function createHistory(data) {
  return await prisma.history.create({
    data,
  });
}

export async function getHistory(userId) {
  return await prisma.history.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}