"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24 pb-32 flex items-center justify-center min-h-[80vh]">
      {/* Optional Background: Subtle Green Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-green-800 shadow-sm mb-8 animate-fade-in-down">
          <span className="text-xl">🌱</span>
          <span className="text-sm font-extrabold text-green-700 dark:text-green-400 uppercase tracking-widest">
            EminiBazar Premium
          </span>
        </div>

        {/* Headline with Gradient Text */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 animate-fade-in-up">
          Bring Nature To <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">
            Your Home
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Discover our curated collection of premium indoor, outdoor, and office
          plants. Breathe life into your space with top-quality greenery
          delivered fresh to your door.
        </p>

        {/* CTA Button - FIXED TO STANDARD TAILWIND GREEN SO IT ALWAYS SHOWS */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Link
            href="/items"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-green-600 dark:bg-green-500 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-green-700 dark:hover:bg-green-400 hover:shadow-[0_0_40px_-10px_rgba(22,163,74,0.6)]"
          >
            {/* Button Shine Animation Effect on Hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out_infinite]"></span>

            <span className="relative text-lg">Shop Now</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Inline styles for custom animations so they work immediately */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shine {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
