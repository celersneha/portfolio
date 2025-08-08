import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/components/SEO";

export const metadata: Metadata = generateSEOMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            404
          </h1>
        </div>

        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8a7.962 7.962 0 01.766 3.291z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Don&apos;t worry, it happens to the best of us!
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            Go Back Home
          </Link>

          <div className="text-center">
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              ← Go Back
            </button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4">
            Maybe you were looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#about"
              className="text-purple-600 hover:text-purple-800 transition-colors text-sm"
            >
              About Me
            </Link>
            <Link
              href="/#projects"
              className="text-purple-600 hover:text-purple-800 transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-purple-600 hover:text-purple-800 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
