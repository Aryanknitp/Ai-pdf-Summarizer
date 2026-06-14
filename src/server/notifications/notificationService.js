import prisma from "@/lib/prisma";

export async function getNotifications(
  userId
) {
  return await prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createNotification(
  data
) {
  return await prisma.notification.create({
    data,
  });
}

export async function markAsRead(
  id
) {
  return await prisma.notification.update({
    where: {
      id,
    },
    data: {
      isRead: true,
    },
  });
}