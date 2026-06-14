"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
}) {
  const [message, setMessage] =
    useState("");

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (
        !message.trim()
      )
        return;

      await onSend(
        message
      );

      setMessage("");
    };

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="border-t border-slate-800 p-4 flex gap-3"
    >
      <input
        type="text"
        value={
          message
        }
        onChange={(
          e
        ) =>
          setMessage(
            e.target
              .value
          )
        }
        placeholder="Ask anything about this PDF..."
        className="flex-1 bg-slate-800 rounded-xl px-4 py-3"
      />

      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl">
        Send
      </button>
    </form>
  );
}