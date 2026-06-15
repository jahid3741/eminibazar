"use client";

import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          🌱 EminiBazar
        </Link>

        <div className="flex gap-5 items-center">
          <Link href="/">Home</Link>
          <Link href="/items">Plants</Link>
          <Link href="/about">About</Link>

          {!user ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <>
              <span className="font-semibold">{user.email}</span>

              <Link href="/items/add">Add Product</Link>

              <Link href="/items/manage">Manage Products</Link>

              <button
                onClick={logoutUser}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
