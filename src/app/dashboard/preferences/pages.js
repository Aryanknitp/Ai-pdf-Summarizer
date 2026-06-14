"use client";

import ThemeSettings from "@/components/preferences/ThemeSettings";
import LanguageSettings from "@/components/preferences/LanguageSettings";
import WorkspaceSettings from "@/components/preferences/WorkspaceSettings";

export default function PreferencesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Preferences
        </h1>

        <p className="mt-2 text-slate-400">
          Customize your AI workspace.
        </p>
      </div>

      <ThemeSettings />
      <LanguageSettings />
      <WorkspaceSettings />
    </div>
  );
}