"use client";

export default function FilterBar({
  value,
  onChange,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
      <select
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="
          w-full
          md:w-64
          px-4
          py-3
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          text-white
        "
      >
        <option value="all">
          All Activities
        </option>

        <option value="upload">
          Uploads
        </option>

        <option value="summary">
          Summaries
        </option>

        <option value="chat">
          Chats
        </option>
      </select>
    </div>
  );
}