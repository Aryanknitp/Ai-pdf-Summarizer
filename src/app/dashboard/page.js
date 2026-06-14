"use client";

import {
  useState,
  useEffect,
} from "react";

import DashboardCard from "@/components/dashboard/DashboardCard";
import RecentUploads from "@/components/dashboard/RecentUploads";

import {
  getDashboardStats,
  getRecentDocuments,
} from "@/services/documentService";

export default function DashboardPage() {
  const [stats, setStats] =
    useState(null);

  const [documents, setDocuments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          dashboardData,
          recentDocs,
        ] =
          await Promise.all([
            getDashboardStats(),
            getRecentDocuments(),
          ]);

        setStats(
          dashboardData
        );

        setDocuments(
          recentDocs.documents ||
            []
        );
      } catch (err) {
        console.error(
          err
        );
      } finally {
        setLoading(
          false
        );
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-xl">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your AI
          documents from
          one place.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        <DashboardCard
          title="Uploaded PDFs"
          value={
            stats?.totalDocuments ??
            0
          }
          icon="📄"
        />

        <DashboardCard
          title="AI Summaries"
          value={
            stats?.totalSummaries ??
            0
          }
          icon="📋"
        />

        <DashboardCard
          title="Chat Sessions"
          value={
            stats?.totalChats ??
            0
          }
          icon="💬"
        />
      </div>

      {/* Recent Uploads */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold mb-5">
          Recent Uploads
        </h2>

        <RecentUploads
          documents={
            documents
          }
        />
      </section>
    </div>
  );
}