export default function ChatBubble({
  role,
  content,
}) {
  const isUser =
    role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl ${
          isUser
            ? "bg-blue-600"
            : "bg-slate-800"
        }`}
      >
        {content}
      </div>
    </div>
  );
}