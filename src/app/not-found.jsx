import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found — 404",
  description:
    "The page you are looking for may have been moved, deleted, or never existed. Return to the DocAppoint homepage to find what you need.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Blur Effects */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-teal-400/20  blur-3xl" />

      <div className="absolute bottom-10 right-10 w-52 h-52 bg-emerald-400/10  blur-3xl" />

      {/* Glass Card */}
      <div className="relative w-full h-screen backdrop-blur-xl bg-white/5 border border-white/20 shadow-2xl  p-6 md:p-10">
        
        {/* Lottie */}
        <div className="w-full pt-15 max-w-3xl mx-auto">
          <DotLottieReact
            src="/404notfound.json"
            loop
            autoplay
          />
        </div>

        {/* Text Content */}
        <div className="text-center mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-500 tracking-tight">
            Page Not Found
          </h1>

          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved,
            deleted, or never existed.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <Link
              href="/"
              className="bg-gradient-to-r from-[#006b5f] to-[#14b8a6] text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-teal-500/20 hover:scale-[1.03] hover:opacity-90 transition-all duration-300"
            >
              Return Home
            </Link>

            <Link
              href="/contact"
              className="border border-white/50 bg-white/50 backdrop-blur-md text-gray-600 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}