"use client";

import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

export default function ChatWindow({
  messages,
}) {
  const bottomRef =
    useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView(
      {
        behavior:
          "smooth",
      }
    );
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages?.map(
        (
          message,
          index
        ) => (
          <ChatBubble
            key={index}
            role={
              message.role
            }
            content={
              message.content
            }
          />
        )
      )}

      <div
        ref={bottomRef}
      />
    </div>
  );
}