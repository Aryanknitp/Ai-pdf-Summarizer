import prisma from "@/lib/prisma";

export async function saveSummary(
  data
) {
  return await prisma.summary.create({
    data,
  });
}

export async function getSummaryByDocumentId(
  documentId
) {
  return await prisma.summary.findFirst({
    where: {
      documentId,
    },
  });
}