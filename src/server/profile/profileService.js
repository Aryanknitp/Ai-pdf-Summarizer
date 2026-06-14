import prisma from "@/lib/prisma";

export async function getProfile(
  userId
) {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function updateProfile(
  userId,
  data
) {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data,
  });
}