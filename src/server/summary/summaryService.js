import prisma from "@/lib/prisma";

function shouldUseFallback(error) {
  const message = error?.message || "";
  const code = error?.code || "";

  return (
    code === "P2021" ||
    code === "P1001" ||
    code === "P2022" ||
    code === "P2023" ||
    code.startsWith("P") ||
    message.includes("DATABASE_URL") ||
    message.includes("AuthenticationFailed") ||
    message.includes("SCRAM") ||
    message.includes("ECONN") ||
    message.includes("timed out") ||
    message.includes("connect")
  );
}

export async function saveSummary(data) {
  const { metadata, content, summary, ...rest } = data ?? {};
  const summaryContent = content ?? summary ?? "";

  try {
    return await prisma.summary.create({
      data: {
        ...rest,
        content: summaryContent,
      },
    });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return {
        id: `summary-${Date.now()}`,
        documentId: rest.documentId,
        content: summaryContent,
        createdAt: new Date().toISOString(),
      };
    }
    throw error;
  }
}

export async function getSummaryByDocumentId(documentId) {
  try {
    return await prisma.summary.findFirst({
    where: {
      documentId,
    },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return null;
    }
    throw error;
  }
}