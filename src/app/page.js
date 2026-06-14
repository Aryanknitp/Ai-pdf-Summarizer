import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-3xl font-bold text-blue-500">
            AI PDF
          </h1>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/login"
              className="text-sm md:text-base px-3 py-2 rounded-lg hover:bg-slate-800 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 px-3 md:px-5 py-2 rounded-lg text-sm md:text-base transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="bg-blue-600/20 text-blue-400 text-xs md:text-sm px-3 py-1 rounded-full">
              🚀 AI Powered PDF Assistant
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Summarize &
              <span className="text-blue-500">
                {" "}Chat with PDFs
              </span>
            </h1>

            <p className="mt-5 text-slate-400 text-base md:text-lg">
              Upload PDFs, generate AI summaries,
              extract important dates and ask
              questions using Retrieval Augmented
              Generation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-center"
              >
                Get Started
              </Link>

              <Link
                href="/login"
                className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-xl text-center"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-8">
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="font-semibold text-blue-400">
                  📄 AI Summary
                </h3>

                <p className="text-slate-300 text-sm mt-2">
                  Generate concise summaries from
                  lengthy PDF documents.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="font-semibold text-yellow-400">
                  📅 Important Dates
                </h3>

                <p className="text-slate-300 text-sm mt-2">
                  Automatically extract deadlines,
                  meetings and events.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <h3 className="font-semibold text-green-400">
                  💬 Chat with PDF
                </h3>

                <p className="text-slate-300 text-sm mt-2">
                  Ask natural language questions
                  about your uploaded documents.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="📄"
            title="AI Summary"
            desc="Summarize large PDFs instantly."
          />

          <FeatureCard
            icon="📅"
            title="Date Extraction"
            desc="Find important deadlines automatically."
          />

          <FeatureCard
            icon="💬"
            title="Chat with PDF"
            desc="Use RAG to ask questions about documents."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {desc}
      </p>
    </div>
  );
}