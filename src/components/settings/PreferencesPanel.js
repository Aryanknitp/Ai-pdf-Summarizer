"use client";

import { useState } from "react";

export default function PreferencesPanel() {
  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: true,
    autoSummary: false,
    compactView: false,
  });

  const handleToggle = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const items = [
    {
      key: "darkMode",
      label: "Dark Mode",
      description: "Enable dark theme.",
    },
    {
      key: "notifications",
      label: "Notifications",
      description: "Receive system notifications.",
    },
    {
      key: "autoSummary",
      label: "Auto Summary",
      description: "Automatically generate summaries after upload.",
    },
    {
      key: "compactView",
      label: "Compact View",
      description: "Use a compact dashboard layout.",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">User Preferences</h2>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between border-b border-slate-800 pb-4"
          >
            <div>
              <h3 className="font-medium">{item.label}</h3>

              <p className="text-sm text-slate-400">{item.description}</p>
            </div>

            <button
              onClick={() => handleToggle(item.key)}
              className={`w-14 h-8 rounded-full transition relative ${
                preferences[item.key] ? "bg-blue-600" : "bg-slate-700"
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
                  preferences[item.key] ? "left-7" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
