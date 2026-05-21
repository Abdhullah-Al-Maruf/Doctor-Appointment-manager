import React from "react";
import { CalendarCheck, MapPin, HelpCircle } from "lucide-react";

import { TbCoinTaka } from "react-icons/tb";
import { AppointmentModal } from "../AppointmentModal";

const DetailsPageBottom = ({ doctorData }) => {
  // Safety check: Get the first available day and its first slot
  const nextDay = doctorData?.availability?.[0]?.day || "N/A";
  const nextSlot = doctorData?.availability?.[0]?.slots?.[0] || "N/A";

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full">
      {/* Main Content (About + Expertise) */}
      <div className="md:col-span-8 flex flex-col gap-8">
        {/* Biography Card */}
        <div className="border-b bg-white/50 backdrop-blur-md shadow-md p-6 md:p-8 rounded-[32px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-teal-600 rounded-full"></span>
            Professional Biography
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              {doctorData.name} is a world-renowned {doctorData.specialty.toLowerCase()} with over{" "}
              {doctorData.experience} years of experience in medical practice. 
              Her patient care philosophy is rooted in <strong>"Atmospheric Trust"</strong>
              —providing a calm, clear, and empathetic environment for every
              patient.
            </p>
            <p>
              A graduate of top medical institutions, {doctorData.name} has
              dedicated her career to integrating precision healthcare with
              modern diagnostic technologies to deliver superior clinical
              outcomes while maintaining the human touch in medicine.
            </p>
          </div>
        </div>

        {/* Specialized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Specializations */}
          <div className="border-b bg-white/60 backdrop-blur-md shadow-md p-6 rounded-[32px]">
            <h3 className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">
                {doctorData.specialty}
              </span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">
                General Checkup
              </span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">
                Consultation
              </span>
            </div>
          </div>

          {/* Clinic Hours */}
                  {/* Clinic Hours */}
          <div className="border-b bg-white/60 backdrop-blur-md shadow-md p-6 rounded-[32px]">
            <h3 className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-5">
              Clinic Hours
            </h3>
            <div className="space-y-4">
              {doctorData.availability.map((avail, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 ${
                    index !== doctorData.availability.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-gray-500 font-medium w-24 shrink-0">
                    {avail.day}
                  </span>
                  <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                    {avail.slots.map((slot, slotIndex) => (
                      <span 
                        key={slotIndex} 
                        className="font-semibold text-gray-900 text-sm whitespace-nowrap bg-gray-50 px-2 py-1 rounded-md"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar: Integrated Booking */}
      <aside className="md:col-span-4">
        <div className="sticky top-[160px] flex flex-col gap-6">
          {/* Booking Card */}
          <div className="bg-teal-600 text-white p-6 md:p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="text-teal-200/70 text-xs uppercase tracking-widest mb-1">
                  Consultation
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">
                    <TbCoinTaka /> {doctorData.fee}
                  </span>
                  <span className="text-teal-200/60 text-xs">/ session</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                  <CalendarCheck className="text-teal-200 shrink-0" size={22} />
                  <div>
                    <p className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">
                      Next Slot
                    </p>
                    <p className="font-semibold text-sm">
                      {nextDay}, {nextSlot}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                  <MapPin className="text-teal-200 shrink-0" size={22} />
                  <div>
                    <p className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="font-semibold text-sm">
                      {doctorData.location}
                    </p>
                  </div>
                </div>
              </div>
           
              <AppointmentModal docName={doctorData.name} />

              <p className="text-center text-[10px] mt-4 text-teal-100/40 uppercase tracking-wider">
                Secure & Instant Confirmation
              </p>
            </div>
          </div>

          {/* Help Card */}
          <div className="border-b bg-white/60 backdrop-blur-md shadow-md p-6 rounded-[32px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600">
                <HelpCircle size={18} />
              </div>
              <span className="font-semibold text-gray-900 text-sm">
                Need Help?
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Our coordination team is available to assist with insurance
              verification.
            </p>
            <a
              className="text-teal-600 font-semibold text-xs hover:underline flex items-center gap-1"
              href="#"
            >
              Contact clinic support →
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DetailsPageBottom;