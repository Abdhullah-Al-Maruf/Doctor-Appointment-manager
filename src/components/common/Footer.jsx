"use client";

import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// --- Configuration Data ---
const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Appointments", href: "/appointments" },
  { label: "Careers", href: "/careers" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "FAQs", href: "/faq" },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF size={16} />, href: "#", label: "Facebook" },
  { icon: <BsTwitterX size={16} />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn size={16} />, href: "#", label: "LinkedIn" },
  { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative  w-full pt-16 pb-8 px-6 md:px-12 bg-white/60  backdrop-blur-xl border-t border-[#14b8a6]/30 text-neutral-700 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        {/* 1. Brand Section */}
        <div className="md:col-span-4 space-y-5">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#14b8a6] to-[#1eb0ea] bg-clip-text text-transparent tracking-tight">
            DocAppoint
          </h2>
          <p className=" max-w-sm leading-relaxed text-sm">
            Precision healthcare for a modern world. We connect you with
            verified specialists for seamless appointments and secure medical
            management.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-sm ">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#14b8a6] text-xs" />
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#14b8a6] text-xs" />
              <span>support@docappoint.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#14b8a6] text-xs" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialLink key={index} {...social} />
            ))}
          </div>
        </div>

        {/* 2. Company Links */}
        <div className="md:col-span-2 space-y-5">
          <h6 className="text-sm font-bold text-gray-600 uppercase tracking-wider">
            Company
          </h6>
          <ul className="space-y-3 text-gray-600">
            {COMPANY_LINKS.map((link, index) => (
              <FooterLink key={index} {...link} />
            ))}
          </ul>
        </div>

        {/* 3. Support Links */}
        <div className="md:col-span-2 space-y-5">
          <h6 className="text-sm font-bold text-gray-600 uppercase tracking-wider">
            Support
          </h6>
          <ul className="space-y-3">
            {SUPPORT_LINKS.map((link, index) => (
              <FooterLink key={index} {...link} />
            ))}
          </ul>
        </div>

        {/* 4. Newsletter Section */}
        <div className="md:col-span-4 space-y-5">
          <h6 className="text-sm font-bold text-gray-600 uppercase tracking-wider">
            Newsletter
          </h6>
          <p className="text-sm text-gray-600">
            Stay updated with health tips, new features, and platform news.
          </p>
          <NewsletterForm />

          {/* Quick Trust Badge */}
          <div className="flex items-center gap-2 pt-2">
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            <span className="text-xs text-neutral-500 uppercase tracking-wider">
              Trusted by 10k+ Patients
            </span>
          </div>
        </div>

        {/* 5. Bottom Bar */}
        <div className="md:col-span-12 pt-1  border-t border-[#14b8a6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()} DocAppoint. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-neutral-700">
            <Link
              href="/terms"
              className="hover:text-[#14b8a6] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#14b8a6] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[#14b8a6] transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Sub-Components ---

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white border border-[#14b8a6]/50 flex items-center justify-center text-neutral-400 hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-white transition-all duration-300 group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
    </a>
  );
}

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-neutral-600 hover:text-[#14b8a6] transition-colors duration-300 block"
      >
        {label}
      </Link>
    </li>
  );
}

function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Your email address"
        required
        className="flex-grow bg-white/5 border border-[#14b8a6]/20 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/40 focus:border-[#14b8a6] transition-all placeholder:text-neutral-500 text-white"
      />
      <button
        type="submit"
        className="bg-[#14b8a6] hover:bg-[#0d9488] text-white p-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#14b8a6]/20 flex items-center justify-center hover:scale-105"
        aria-label="Subscribe"
      >
        <FaPaperPlane size={16} />
      </button>
    </form>
  );
}
