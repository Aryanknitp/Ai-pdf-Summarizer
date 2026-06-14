"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Upload,
  Files,
  FileText,
  MessageSquare,
  User,
  Settings,
  X,
  Activity,
  History,
  BarChart3,
  Analytics,
  Bell,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function MobileSidebar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const button = document.getElementById("mobile-menu-btn");

    if (!button) return;

    const toggleMenu = () => {
      setOpen((prev) => !prev);
    };

    button.addEventListener("click", toggleMenu);

    return () => {
      button.removeEventListener("click", toggleMenu);
    };
  }, []);

  const menus = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Upload PDF",
      href: "/dashboard/upload",
      icon: Upload,
    },
    {
      name: "Activity",
      href: "/dashboard/activity",
      icon: Activity,
    },
    {
      name: "History",
      href: "/dashboard/history",
      icon: History,
    },
    {
      name: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
    {
      name: "Search",
      href: "/dashboard/search",
      icon: Search,
    },
    {
      name: "Preferences",
      href: "/dashboard/preferences",
      icon: SlidersHorizontal,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      name: "Documents",
      href: "/dashboard/documents",
      icon: Files,
    },
    {
      name: "AI Summary",
      href: "/dashboard/summary",
      icon: FileText,
    },
    {
      name: "Chat",
      href: "/dashboard/chat",
      icon: MessageSquare,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          md:hidden
        "
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`
        fixed
        top-0
        left-0
        z-50
        flex
        flex-col
        h-screen
        w-72
        bg-slate-900
        border-r
        border-slate-800
        shadow-2xl
        transition-transform
        duration-300
        ease-in-out
        md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="h-16 min-h-16 border-b border-slate-800 flex items-center justify-between px-5">
          <h2 className="text-2xl font-bold text-blue-500">AI PDF</h2>

          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-800 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <nav
          className="
          flex-1
          overflow-y-auto
          p-4
          space-y-2
        "
        >
          {menus.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                flex
                items-center
                gap-4
                px-4
                py-3
                rounded-xl
                transition-all
                duration-200
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }
              `}
              >
                <Icon size={20} />

                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Fixed Footer */}
        <div className="border-t border-slate-800 p-4">
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-sm font-medium">AI PDF Summarizer</p>

            <p className="mt-1 text-xs text-slate-400">
              Upload • Summarize • Chat
            </p>

            <div className="mt-3 h-px bg-slate-700" />

            <p className="mt-3 text-[11px] text-slate-500">Version 1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
}
