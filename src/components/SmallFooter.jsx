import React from "react";
import Link from "next/link";

export default function SmallFooter() {
  return (
    <footer className=" py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-sm text-gray-600">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            href="/help"
            className="hover:text-orange-600 transition-colors"
          >
            Help Center
          </Link>
          <Link
            href="/privacy"
            className="hover:text-orange-600 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-orange-600 transition-colors"
          >
            Terms
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2">
          © 2026 DocAppointment. Help to stay Healthy.
        </p>
      </div>
    </footer>
  );
}
