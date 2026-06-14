import prisma from "@/lib/prisma";

export async function globalSearch(
  query
) {
  const documents =
    await prisma.document.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
    });

  return {
    documents,
  };
}