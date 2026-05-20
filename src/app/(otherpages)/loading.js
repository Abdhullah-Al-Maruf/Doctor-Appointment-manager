'use client';

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export default function Loading({ isFullScreen = true }) {
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
    const startTime = Date.now();
    const duration = 2000; // reach 100% in 2.6 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const computedProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(computedProgress);
      if (elapsed >= duration) {
        clearInterval(interval);
      }
    }, 30); // ~33 FPS smooth rendering

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) {
    return (
      <div className={`fixed flex items-center justify-center bg-[#f8fafc]/50 backdrop-blur-md ${
        isFullScreen ? 'inset-0 z-[60]' : 'top-16 bottom-0 inset-x-0 z-40'
      }`}>
        <div className="w-12 h-12 border-4 border-teal-500/20 border-t-teal-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`fixed flex items-center justify-center backdrop-blur-md overflow-hidden ${
      isFullScreen 
        ? 'inset-0 z-[60] bg-slate-900/10' 
        : 'top-16 bottom-0 inset-x-0 z-40 bg-slate-900/5'
    }`}>
      {/* Inline styles for custom premium animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-orb {
          0%, 100% { transform: scale(1) translate(0px, 0px); opacity: 0.25; }
          33% { transform: scale(1.1) translate(10px, -15px); opacity: 0.35; }
          66% { transform: scale(0.95) translate(-10px, 10px); opacity: 0.2; }
        }
      `}} />

      {/* Floating Ambient Glow Orbs */}
      <div 
        className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#14b8a6] rounded-full blur-[100px] pointer-events-none" 
        style={{ animation: 'pulse-orb 8s infinite ease-in-out' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-[320px] h-[320px] bg-[#1eb0ea] rounded-full blur-[110px] pointer-events-none" 
        style={{ animation: 'pulse-orb 8s infinite ease-in-out', animationDelay: '4s' }}
      />

      {/* Premium Glassmorphic Loader Card */}
      <div 
        className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] mx-4 bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(20,184,166,0.12)] rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300"
        style={{ animation: 'float-card 4s infinite ease-in-out' }}
      >
        {/* Dynamic Colorful Top Border Accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#006b5f] via-[#14b8a6] to-[#1eb0ea] rounded-t-3xl" />

        {/* Lottie Animation Player Container */}
        <div className="w-[180px] h-[180px] relative mb-2 flex items-center justify-center">
          <DotLottieReact
            src="/loading.lottie"
            loop
            autoplay
            className="w-full h-full object-contain"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>

        {/* Branding Info */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#006b5f] to-[#14b8a6] bg-clip-text text-transparent tracking-tight">
            DocAppoint
          </h2>
          <p className="text-[10px] text-[#3c4947] font-bold uppercase tracking-widest opacity-80">
            Precision Healthcare Portal
          </p>
        </div>

        {/* Status indicator with ping pulse */}
        <div className="flex items-center gap-2 mt-6 text-sm font-medium text-[#2d3a38]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14b8a6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14b8a6]"></span>
          </span>
          <span className="text-gray-600">Connecting to secure server...</span>
        </div>

        {/* Elegant Loading Progress Bar */}
        <div className="w-48 h-1.5 bg-teal-100/50 rounded-full mt-4 overflow-hidden relative border border-white/50">
          <div 
            className="h-full bg-gradient-to-r from-[#006b5f] to-[#14b8a6] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(20,184,166,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Value */}
        <span className="text-[10px] text-[#3c4947]/60 font-bold mt-2 font-mono">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
