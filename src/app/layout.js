import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { ToastContainer } from "react-toastify";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DocAppoint — Smart Doctor Appointment Manager",
    template: "%s | DocAppoint",
  },
  description:
    "Book appointments with top-rated doctors effortlessly. DocAppoint is a modern, HIPAA-compliant platform for managing your healthcare journey — from finding specialists to tracking bookings.",
  keywords: [
    "doctor appointment",
    "book doctor online",
    "healthcare",
    "medical appointment",
    "find doctor",
    "specialist booking",
    "DocAppoint",
    "telehealth",
    "online healthcare",
  ],
  authors: [{ name: "DocAppoint Team" }],
  creator: "DocAppoint",
  publisher: "DocAppoint",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DocAppoint",
    title: "DocAppoint — Smart Doctor Appointment Manager",
    description:
      "Book appointments with top-rated doctors effortlessly. A modern, HIPAA-compliant platform for managing your healthcare journey.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DocAppoint — Smart Doctor Appointment Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DocAppoint — Smart Doctor Appointment Manager",
    description:
      "Book appointments with top-rated doctors effortlessly. A modern healthcare platform.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interFont.className} h-full antialiased`}>
      <head>
        {/* Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col relative overflow-y-auto">
        {/* 1. Full‑screen background */}
        <div className="bg-fullscreen" />
        <ToastContainer />
        {/* Navbar sits on top of background */}
        <Navbar />

        {/* Main Content scrolls OVER the background */}
        <main className="relative z-10 w-full flex-grow">{children}</main>
      </body>
    </html>
  );
}
