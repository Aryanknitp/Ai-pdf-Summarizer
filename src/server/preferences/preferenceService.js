import prisma from "@/lib/prisma";

export async function getPreferences(
  userId
) {
  return await prisma.preference.findFirst({
    where: {
      userId,
    },
  });
}

export async function updatePreferences(
  userId,
  data
) {
  return await prisma.preference.upsert({
    where: {
      userId,
    },
    create: {
      userId,
      ...data,
    },
    update: data,
  });
}