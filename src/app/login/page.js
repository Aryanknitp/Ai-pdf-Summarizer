"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import GuestGuard from "@/components/guards/GuestGuard";
import { login } from "@/services/authService";

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

  /*
  =========================================================
  Handle Input Changes
  =========================================================
  */

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));

    // Clear previous errors
    setError("");
  };

  /*
  =========================================================
  Handle Login
  =========================================================
  */

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    // Basic frontend validation
    if (
      !form.email.trim() ||
      !form.password.trim()
    ) {
      setError(
        "Please enter email and password."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      /*
      --------------------------------------------------
      Call Backend Login API
      --------------------------------------------------
      authService.js:
      POST /api/auth/login
      --------------------------------------------------
      */

      const response =
        await login({
          email: form.email,
          password:
            form.password,
        });

      /*
      --------------------------------------------------
      Save Authentication Token
      --------------------------------------------------

      Current:
      - Save JWT to localStorage.

      TODO (Later):
      - Store JWT in secure HttpOnly cookies.
      - Add refresh token flow.
      - Add session expiration.
      --------------------------------------------------
      */

      localStorage.setItem(
        "accessToken",
        response.token
      );

      /*
      --------------------------------------------------
      Save User Info (Optional)
      --------------------------------------------------
      */

      if (response.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(
            response.user
          )
        );
      }

      /*
      --------------------------------------------------
      Redirect to Dashboard
      --------------------------------------------------
      */

      router.push(
        "/dashboard"
      );
    } catch (err) {
      console.error(
        "Login Error:",
        err
      );

      setError(
        err?.response?.data
          ?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestGuard>
      <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">

          {/* Header */}

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-slate-400">
              Login to continue to your
              AI PDF Workspace.
            </p>
          </div>

          {/* Login Form */}

          <form
            onSubmit={
              handleSubmit
            }
            className="mt-8 space-y-5"
          >
            {/* Email */}

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                autoComplete="email"
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
                  focus:outline-none
                  focus:border-blue-500
                "
              />
            </div>

            {/* Password */}

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                autoComplete="current-password"
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
                  focus:outline-none
                  focus:border-blue-500
                "
              />
            </div>

            {/* Error Message */}

            {error && (
              <div
                className="
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/10
                  px-4
                  py-3
                  text-sm
                  text-red-400
                "
              >
                {error}
              </div>
            )}

            {/* Login Button */}

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
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>
          </form>

          {/* Footer */}

          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="
                font-medium
                text-blue-400
                hover:text-blue-300
              "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </GuestGuard>
  );
}