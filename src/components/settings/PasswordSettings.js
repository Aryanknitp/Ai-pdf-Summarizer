"use client";

import { useState } from "react";
import {
  changePassword,
} from "@/services/authService";

export default function PasswordSettings() {
  const [form, setForm] =
    useState({
      currentPassword:
        "",
      newPassword:
        "",
      confirmPassword:
        "",
    });

  const handleChange = (
    e
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      if (
        form.newPassword !==
        form.confirmPassword
      ) {
        alert(
          "Passwords do not match."
        );

        return;
      }

      try {
        await changePassword(
          form
        );
      } catch (error) {
        console.log(
          error
        );
      }
    };

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
    >
      <h2 className="text-2xl font-bold mb-5">
        Change Password
      </h2>

      <div className="space-y-4">
        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={
            form.currentPassword
          }
          onChange={
            handleChange
          }
          className="w-full bg-slate-800 rounded-xl px-4 py-3"
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={
            form.newPassword
          }
          onChange={
            handleChange
          }
          className="w-full bg-slate-800 rounded-xl px-4 py-3"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={
            form.confirmPassword
          }
          onChange={
            handleChange
          }
          className="w-full bg-slate-800 rounded-xl px-4 py-3"
        />
      </div>

      <button className="mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl">
        Update Password
      </button>
    </form>
  );
}