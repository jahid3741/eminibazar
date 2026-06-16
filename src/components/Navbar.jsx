"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useTheme } from "next-themes";
import {
  Leaf,
  Menu,
  X,
  LogOut,
  PlusCircle,
  LayoutDashboard,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme state
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <div className="p-2.5 bg-brand-primary/20 rounded-xl group-hover:bg-brand-primary/30 transition-colors">
              <Leaf className="w-7 h-7 text-brand-primary dark:text-emerald-400" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white hidden sm:block">
              EminiBazar
            </span>
          </Link>

          {/* Desktop Navigation - Main Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-emerald-400 font-bold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-emerald-400 font-bold transition-colors"
            >
              Plants
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-emerald-400 font-bold transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop Navigation - Auth, Theme & Actions */}
          <div className="hidden md:flex items-center gap-5">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
              >
                {theme === "dark" ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            )}

            {!user ? (
              <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-5">
                {/* HIGH VISIBILITY BUTTONS */}
                <Link
                  href="/login"
                  className="px-5 py-2.5 rounded-xl font-bold border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2.5 rounded-xl font-bold bg-brand-primary text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-5">
                <Link
                  href="/items/add"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-brand-primary bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors"
                >
                  <PlusCircle className="w-5 h-5" />
                </Link>
                <Link
                  href="/items/manage"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-brand-primary bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors"
                >
                  <LayoutDashboard className="w-5 h-5" />
                </Link>

                {/* USER PROFILE DISPLAY */}
                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 pr-4 pl-1.5 py-1.5 rounded-full">
                    {/* Shows uploaded image if it exists */}
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">
                        {(user?.displayName || user?.name || "U")
                          .charAt(0)
                          .toUpperCase()}
                      </div>
                    )}

                    {/* Shows exactly what is saved in the database for their name */}
                    <span className="text-sm font-extrabold text-gray-900 dark:text-white max-w-[150px] truncate">
                      {user?.displayName || user?.name || "User"}
                    </span>
                  </div>

                  <button
                    onClick={logoutUser}
                    className="p-2.5 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-600 dark:text-gray-300"
              >
                {theme === "dark" ? (
                  <Sun className="w-7 h-7" />
                ) : (
                  <Moon className="w-7 h-7" />
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-800 dark:text-gray-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/items"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Plants
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About
            </Link>

            <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 mt-2">
              {!user ? (
                <div className="space-y-3 px-3">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="block w-full text-center px-4 py-3 rounded-xl font-bold border-2 border-brand-primary text-brand-primary dark:border-emerald-500 dark:text-emerald-500"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={closeMenu}
                    className="block w-full text-center px-4 py-3 rounded-xl font-bold bg-brand-primary text-white dark:bg-emerald-600"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="px-3 flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xl">
                        {(user?.displayName || user?.name || "U")
                          .charAt(0)
                          .toUpperCase()}
                      </div>
                    )}
                    <span className="font-extrabold text-gray-900 dark:text-white text-lg truncate">
                      {user?.displayName || user?.name || "User"}
                    </span>
                  </div>

                  <Link
                    href="/items/add"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <PlusCircle className="w-6 h-6" /> Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <LayoutDashboard className="w-6 h-6" /> Manage Products
                  </Link>
                  <div className="px-3 mt-4">
                    <button
                      onClick={() => {
                        logoutUser();
                        closeMenu();
                      }}
                      className="flex w-full justify-center items-center gap-2 px-4 py-3 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 rounded-xl font-bold"
                    >
                      <LogOut className="w-5 h-5" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
