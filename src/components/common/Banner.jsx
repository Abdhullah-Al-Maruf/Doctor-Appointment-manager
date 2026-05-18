"use client";

import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative min-h-[921px] flex items-center px-4 md:px-12  text-[#191c1e] overflow-hidden">

      {/* Floating Blur Orbs */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#14b8a6] blur-[120px] opacity-20 rounded-full z-[-1] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-[#1eb0ea] blur-[120px] opacity-20 rounded-full z-[-1] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Trusted Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-white/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            <span className="text-[12px] leading-[1.4] font-semibold text-[#3c4947] uppercase tracking-wider">
              Trusted by 10k+ Patients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#191c1e] leading-tight">
            Your Health, <br />
            <span className="text-[#14b8a6]">Our First Priority</span>
          </h1>

          {/* Description */}
          <p className="text-[18px] leading-[1.6] text-[#3c4947] max-w-xl">
            Experience precision healthcare with our network of verified
            specialists. Book seamless appointments and manage your medical
            history in one secure clinical-grade platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="px-16 py-4 bg-[#14b8a6] text-white text-[14px] leading-[1.4] font-medium rounded-full shadow-lg hover:shadow-[#14b8a6]/20 hover:scale-[1.02] transition-all duration-300 border-0">
              Book Appointment
            </button>
            <button className="px-16 py-4 bg-white/70 backdrop-blur-md border border-white/30 text-[14px] leading-[1.4] font-medium text-[#191c1e] hover:bg-white/40 transition-all duration-300 rounded-full border-0">
              Explore Doctors
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-10 max-w-2xl">
            <div className="space-y-1">
              <div className="text-[24px] leading-[1.4] font-semibold text-[#191c1e]">
                500+
              </div>
              <div className="text-[12px] leading-[1.4] font-semibold text-[#3c4947]">
                Verified Doctors
              </div>
            </div>
            <div className="space-y-1 border-x border-[#bbcac6]/30 px-6">
              <div className="text-[24px] leading-[1.4] font-semibold text-[#191c1e]">
                4.9/5
              </div>
              <div className="text-[12px] leading-[1.4] font-semibold text-[#3c4947]">
                Patient Rating
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[24px] leading-[1.4] font-semibold text-[#191c1e]">
                24/7
              </div>
              <div className="text-[12px] leading-[1.4] font-semibold text-[#3c4947]">
                Active Support
              </div>
            </div>
          </div>
        </div>

        {/* Right Image + Floating Card */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/50">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
              alt="Professional doctor smiling"
              width={600}
              height={750}
              className="w-full aspect-[4/5] object-cover"
              priority
            />
          </div>

          {/* Glass Floating Card */}
          <div className="absolute -bottom-10 -left-10 bg-white/70 backdrop-blur-md border border-white/30 rounded-[24px] p-6 shadow-xl z-20 max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <FaCheckCircle className="text-[#14b8a6] text-2xl" />
              <span className="text-[14px] leading-[1.4] font-medium text-[#191c1e] font-bold">
                Priority Care
              </span>
            </div>
            <p className="text-[12px] leading-[1.4] font-semibold text-[#3c4947]">
              Your wellness is monitored 24/7 by our expert board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;