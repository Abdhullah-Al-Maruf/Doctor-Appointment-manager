import React from "react";
import {
  CalendarCheck,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { AppointmentModal } from "../AppointmentModal";

const DetailsPageBottom = () => {
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
              Dr. Sarah Mitchell is a world-renowned cardiologist with over 12 years of experience in cardiovascular medicine. She specializes in preventative cardiology, heart failure management, and advanced echocardiography. Her patient care philosophy is rooted in <strong>"Atmospheric Trust"</strong>—providing a calm, clear, and empathetic environment for every patient.
            </p>
            <p>
              A graduate of Johns Hopkins University, Dr. Mitchell has dedicated her career to integrating precision healthcare with modern diagnostic technologies to deliver superior clinical outcomes while maintaining the human touch in medicine.
            </p>
          </div>
        </div>

        {/* Specialized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Specializations */}
          <div className="border-b bg-white/60 backdrop-blur-md shadow-md p-6 rounded-[32px]">
            <h3 className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">Specializations</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">Heart Failure</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">Echocardiography</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">Preventative Care</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-xl text-xs font-semibold">Hypertension</span>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="border-b bg-white/60 backdrop-blur-md shadow-md p-6 rounded-[32px]">
            <h3 className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">Clinic Hours</h3>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Mon - Fri</span>
                <span className="font-semibold text-gray-900">09:00 AM - 05:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Sat</span>
                <span className="font-semibold text-gray-900">09:00 AM - 01:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Sun</span>
                <span className="text-rose-500 font-semibold">Closed</span>
              </div>
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
                <div className="text-teal-200/70 text-xs uppercase tracking-widest mb-1">Consultation</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">$150.00</span>
                  <span className="text-teal-200/60 text-xs">/ session</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                  <CalendarCheck className="text-teal-200 shrink-0" size={22} />
                  <div>
                    <p className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">Next Slot</p>
                    <p className="font-semibold text-sm">Tomorrow, 10:30 AM</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center gap-4">
                  <MapPin className="text-teal-200 shrink-0" size={22} />
                  <div>
                    <p className="text-[11px] text-teal-200/60 font-semibold uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-sm">Mercy Medical Center</p>
                  </div>
                </div>
              </div>

            <AppointmentModal/>
              
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
              <span className="font-semibold text-gray-900 text-sm">Need Help?</span>
            </div>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Our coordination team is available to assist with insurance verification.
            </p>
            <a className="text-teal-600 font-semibold text-xs hover:underline flex items-center gap-1" href="#">
              Contact clinic support →
            </a>
          </div>

        </div>
      </aside>

    </div>
  );
};

export default DetailsPageBottom;
