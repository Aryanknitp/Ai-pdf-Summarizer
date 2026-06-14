"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    // Call authService.signup()
    router.push(
      "/login"
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-slate-400 mt-3">
          Start your AI learning journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl p-3"
          />

          <button
            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}