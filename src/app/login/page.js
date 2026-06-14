"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import GuestGuard from "@/components/guards/GuestGuard";
// Uncomment after backend is ready
// import { loginUser } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.email ||
      !form.password
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    try {
      setLoading(true);

      /*
      -------------------------------------------------------
      Replace this section when backend is ready
      -------------------------------------------------------

      const response = await loginUser(form);

      localStorage.setItem(
        "accessToken",
        response.token
      );

      */

      // Temporary login for frontend testing
      localStorage.setItem(
        "accessToken",
        "dummy-token"
      );

      router.push(
        "/dashboard"
      );
    } catch (err) {
      console.error(err);

      setError(
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestGuard>
      <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-slate-400">
              Login to continue to your AI PDF Workspace.
            </p>
          </div>

          <form
            onSubmit={
              handleSubmit
            }
            className="mt-8 space-y-5"
          >
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={
                  form.email
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-500
                  focus:border-blue-500
                  focus:outline-none
                "
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={
                  form.password
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-500
                  focus:border-blue-500
                  focus:outline-none
                "
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={
                loading
              }
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                transition-all
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </GuestGuard>
  );
}