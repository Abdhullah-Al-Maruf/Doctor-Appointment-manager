import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "DocAppoint",
  description: "Doctor appointment manager application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interFont.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        {/* 1. The Image Layer */}
        <div className="bg-fixed-medical" />

        {/* Navbar sits on top of background */}
        <Navbar />

        {/* Main Content scrolls OVER the background */}
        <main className="relative z-10 w-full flex-grow">{children}</main>
      </body>
    </html>
  );
}
