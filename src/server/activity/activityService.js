import prisma from "@/lib/prisma";

export async function createActivity(data) {
  return await prisma.activity.create({
    data,
  });
}

export async function getUserActivities(userId) {
  return await prisma.activity.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}