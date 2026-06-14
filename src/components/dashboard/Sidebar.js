"use client";

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
  History,
  Activity,
  BarChart3,
  Bell,
  Search,
  SlidersHorizontal,
  Analytics,
} from "lucide-react";
// import {
//   User,
//   Settings,
// } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Activity",
      href: "/dashboard/activity",
      icon: Activity,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      name: "History",
      href: "/dashboard/history",
      icon: History,
    },

    {
      name: "Upload PDF",
      href: "/dashboard/upload",
      icon: Upload,
    },
    {
      name: "Documents",
      href: "/dashboard/documents",
      icon: Files,
    },
    {
      name: "Summary",
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
  ];

  return (
    <aside
      className="
      hidden
      md:flex
      flex-col
      w-72
      h-screen
      sticky
      top-0
      bg-slate-900
      border-r
      border-slate-800
      overflow-hidden
      shrink-0
    "
    >
      {/* Logo */}
      <div className="h-16 min-h-16 border-b border-slate-800 flex items-center px-6">
        <h2 className="text-2xl font-bold text-blue-500">AI PDF</h2>
      </div>

      {/* Scrollable Menu */}
      <nav
        className="
        flex-1
        overflow-y-auto
        p-4
        space-y-2
        scrollbar-thin
      "
      >
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              transition-all
              duration-200
              ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }
            `}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <div className="rounded-xl bg-slate-800 p-3">
          <p className="text-xs text-slate-400">AI PDF Summarizer</p>

          <p className="mt-1 text-sm font-medium">Version 1.0</p>
        </div>
      </div>
    </aside>
  );
}
