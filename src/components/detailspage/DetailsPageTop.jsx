import React from "react";
import {
  Users,
  Star,
  Clock,
  MessageSquare,
  CheckCircle2,

} from "lucide-react";
import Image from "next/image";

// --- StatCard ---
const StatCard = ({ icon, value, label, bgColor, iconColor }) => {
  return (
    <div className="border-b  bg-white/60 backdrop-blur-md shadow-md p-5 rounded-3xl flex flex-col items-center text-center hover:bg-white/60 transition-all duration-300 cursor-default shadow-xs">
      <div className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center ${iconColor} mb-3`}>
        {icon}
      </div>
      <span className="text-xl sm:text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-xs sm:text-sm text-gray-500 mt-1">{label}</span>
    </div>
  );
};

// --- Main ---
const DetailsPageTop = ({doctorData}) => {
  return (
    <section className="relative mb-12 w-full">


      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">

        {/* IMAGE */}
        <div className="lg:col-span-5 relative">
          <div className="glass-card p-3 rounded-[40px] shadow-2xl">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative">
              <Image
                src={doctorData.image}
                alt={doctorData.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-black/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-white">
                  <p className="text-[11px] opacity-80 uppercase tracking-tighter">Based in</p>
                  <p className="font-semibold text-sm">{doctorData.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INFO & STATS */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:pb-6">
          
          {/* Title Block */}
          <div className="mb-2">
            <span className="bg-teal-600/10 text-teal-700 px-4 py-1.5 rounded-full font-semibold text-xs mb-4 inline-block border border-teal-600/20 backdrop-blur-sm">
              Top Rated Specialist
            </span>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] leading-[1.1] font-bold text-gray-900 mb-3">
            {doctorData.name}
            </h1>
            
            <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600 font-medium">
              <CheckCircle2 className="text-teal-600 shrink-0" size={20} />
              <span>Board Certified Senior Cardiologist at Mercy Medical Center</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard 
              icon={<Users size={22} />} 
              value="2.5k+" 
              label="Patients" 
              bgColor="bg-teal-500/10" 
              iconColor="text-teal-600" 
            />
            <StatCard 
              icon={<Star size={22} />} 
              value={doctorData.rating} 
              label="Rating" 
              bgColor="bg-amber-500/10" 
              iconColor="text-amber-500" 
            />
            <StatCard 
              icon={<Clock size={22} />} 
              value={doctorData.experience} 
              label="Experience" 
              bgColor="bg-blue-500/10" 
              iconColor="text-blue-600" 
            />
            <StatCard 
              icon={<MessageSquare size={22} />} 
              value="2" 
              label="Languages" 
              bgColor="bg-purple-500/10" 
              iconColor="text-purple-600" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DetailsPageTop;