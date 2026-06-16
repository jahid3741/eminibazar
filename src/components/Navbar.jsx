"use client";

import { useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import {
  Leaf,
  Menu,
  X,
  LogOut,
  PlusCircle,
  LayoutDashboard,
  User,
} from "lucide-react";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-light shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
              <Leaf className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-secondary hidden sm:block">
              EminiBazar
            </span>
          </Link>

          {/* Desktop Navigation - Main Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
            >
              Plants
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
            >
              About
            </Link>
          </div>

          {/* Desktop Navigation - Auth & Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <div className="flex items-center gap-4 border-l border-gray-200 pl-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-brand-primary font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-brand-primary hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4 border-l border-gray-200 pl-4">
                {/* Admin/Dashboard Links */}
                <Link
                  href="/items/add"
                  className="p-2 text-gray-500 hover:text-brand-primary bg-gray-50 hover:bg-brand-light rounded-lg transition-colors"
                  title="Add Product"
                >
                  <PlusCircle className="w-5 h-5" />
                </Link>
                <Link
                  href="/items/manage"
                  className="p-2 text-gray-500 hover:text-brand-primary bg-gray-50 hover:bg-brand-light rounded-lg transition-colors"
                  title="Manage Products"
                >
                  <LayoutDashboard className="w-5 h-5" />
                </Link>

                {/* User Profile & Logout */}
                <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-secondary bg-brand-light px-3 py-1.5 rounded-full">
                    <User className="w-4 h-4" />
                    <span className="truncate max-w-[120px]">{user.email}</span>
                  </div>
                  <button
                    onClick={logoutUser}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-brand-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light"
            >
              Home
            </Link>
            <Link
              href="/items"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light"
            >
              Plants
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light"
            >
              About
            </Link>

            <div className="pt-4 pb-2 border-t border-gray-200 mt-2">
              {!user ? (
                <div className="space-y-2 px-3">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="block w-full text-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={closeMenu}
                    className="block w-full text-center px-4 py-2 bg-brand-primary rounded-lg text-white font-medium hover:bg-emerald-600"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="px-3 flex items-center gap-2 text-brand-secondary font-medium">
                    <User className="w-5 h-5" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <Link
                    href="/items/add"
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light"
                  >
                    <PlusCircle className="w-5 h-5" /> Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={closeMenu}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light"
                  >
                    <LayoutDashboard className="w-5 h-5" /> Manage Products
                  </Link>
                  <div className="px-3">
                    <button
                      onClick={() => {
                        logoutUser();
                        closeMenu();
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 mt-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors"
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
