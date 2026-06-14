// import Navbar from "@/components/dashboard/Navbar";
// import Sidebar from "@/components/dashboard/Sidebar";
// import MobileSidebar from "@/components/dashboard/MobileSidebar";
// import AuthGuard from "@/components/guards/AuthGuard";

// export default function DashboardLayout({
//   children,
// }) {
//   return (
//     <AuthGuard>
//       <div className="min-h-screen flex bg-slate-950 text-white">
//         {/* Desktop Sidebar */}
//         <div className="hidden lg:block">
//           <Sidebar />
//         </div>

//         {/* Mobile Sidebar */}
//         <div className="lg:hidden">
//           <MobileSidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <Navbar />

//           <main className="flex-1 overflow-y-auto p-4 md:p-6">
//             {children}
//           </main>
//         </div>
//       </div>
//     </AuthGuard>
//   );
// }




import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileSidebar from "@/components/dashboard/MobileSidebar";
import AuthGuard from "@/components/guards/AuthGuard";

export default function DashboardLayout({
  children,
}) {
  return (
    <AuthGuard>
      <div className="h-screen flex overflow-hidden bg-slate-950 text-white">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Sidebar */}
        <MobileSidebar />

        {/* Main Area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          <Navbar />

          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}