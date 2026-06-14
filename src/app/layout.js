import "./globals.css";
import OfflineBanner from "@/components/feedback/OfflineBanner";
export const metadata = {
  title: "AI PDF Summarizer",
  description:
    "Upload, summarize and chat with your PDFs using AI.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased overflow-x-hidden">
         <OfflineBanner/>
        {children}
      </body>
    </html>
  );
}