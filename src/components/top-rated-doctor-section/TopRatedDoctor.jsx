import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";


const TopRatedDoctor = () => {
  return (
       <section className="relative mt-2  w-full py-24 bg-slate-50 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="ma mb-16">
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
          Meet our
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
           Top Rated Specialists
          </h2>
          <p className="text-slate-500 leading-relaxed">
             Our highly acclaimed medical professionals, recognized for <br /> their
        excellence in patient and clinical expertise.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctor;
