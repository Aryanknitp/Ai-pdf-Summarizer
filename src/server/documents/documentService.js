import prisma from "@/lib/prisma";

export async function createDocument(data) {
  return await prisma.document.create({
    data,
  });
}

export async function getAllDocuments() {
  return await prisma.document.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getRecentDocuments() {
  return await prisma.document.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getDocumentById(id) {
  return await prisma.document.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteDocument(id) {
  return await prisma.document.delete({
    where: {
      id,
    },
  });
}

export async function searchDocuments(query) {
  return await prisma.document.findMany({
    where: {
      title: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
}