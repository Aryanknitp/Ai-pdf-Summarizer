"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-4 md:px-6">
      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-btn"
        className="md:hidden p-2 rounded-lg hover:bg-slate-800"
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      <div>
        <h1 className="text-lg md:text-2xl font-bold text-blue-500">
          AI PDF
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <input
          type="text"
          placeholder="Search documents..."
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 focus:border-blue-500"
        />
      </div>

      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
        U
      </div>
    </header>
  );
}