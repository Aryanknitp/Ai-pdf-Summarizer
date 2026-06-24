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

function createFallbackDocument(data) {
  return {
    id: `doc-${Date.now()}`,
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function createDocument(data) {
  const { metadata, ...documentData } = data ?? {};

  try {
    return await prisma.document.create({ data: documentData });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return createFallbackDocument(documentData);
    }
    throw error;
  }
}

export async function getAllDocuments(userId) {
  try {
    return await prisma.document.findMany({
      where: { uploadedBy: userId },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    if (error?.code === "P2021" || error?.code === "P1001" || error?.message?.includes("DATABASE_URL")) {
      return [];
    }
    throw error;
  }
}

export async function getRecentDocuments(userId) {
  try {
    return await prisma.document.findMany({
      where: { uploadedBy: userId },
      take: 5,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    if (error?.code === "P2021" || error?.code === "P1001" || error?.message?.includes("DATABASE_URL")) {
      return [];
    }
    throw error;
  }
}

export async function getDocumentById(id) {
  try {
    return await prisma.document.findUnique({ where: { id } });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return null;
    }
    throw error;
  }
}

export async function deleteDocument(id) {
  try {
    return await prisma.document.delete({ where: { id } });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return { id };
    }
    throw error;
  }
}

export async function searchDocuments(query) {
  try {
    return await prisma.document.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
  } catch (error) {
    if (error?.code === "P2021" || error?.code === "P1001" || error?.message?.includes("DATABASE_URL")) {
      return [];
    }
    throw error;
  }
}