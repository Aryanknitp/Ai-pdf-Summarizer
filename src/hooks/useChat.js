"use client";

import {
  useState,
  useEffect,
} from "react";

import {
  getChatHistory,
  sendMessage,
} from "@/services/chatService";

export function useChat(
  documentId
) {
  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    if (documentId) {
      loadChat();
    }
  }, [documentId]);

  const loadChat =
    async () => {
      try {
        setLoading(true);

        const data =
          await getChatHistory(
            documentId
          );

        setMessages(
          data.messages ||
            []
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  const handleSend =
    async (
      message
    ) => {
      try {
        const response =
          await sendMessage(
            documentId,
            message
          );

        setMessages(
          (prev) => [
            ...prev,
            {
              role:
                "user",
              content:
                message,
            },
            {
              role:
                "assistant",
              content:
                response.answer,
            },
          ]
        );
      } catch (err) {
        setError(err);
      }
    };

  return {
    messages,
    loading,
    error,
    sendMessage:
      handleSend,
    refreshChat:
      loadChat,
  };
}