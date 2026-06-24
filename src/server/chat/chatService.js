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

export async function saveChat(data) {
  const { metadata, question, message, ...rest } = data ?? {};
  const chatQuestion = question ?? message ?? "";

  try {
    return await prisma.chat.create({
      data: {
        ...rest,
        question: chatQuestion,
        answer: data?.answer ?? "",
      },
    });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return {
        id: `chat-${Date.now()}`,
        documentId: rest.documentId,
        question: chatQuestion,
        answer: data?.answer ?? "",
        createdAt: new Date().toISOString(),
      };
    }
    throw error;
  }
}

export async function getChatHistory(documentId) {
  try {
    return await prisma.chat.findMany({
    where: {
      documentId,
    },
      orderBy: {
        createdAt: "asc",
      },
    });
  } catch (error) {
    if (shouldUseFallback(error)) {
      return [];
    }
    throw error;
  }
}