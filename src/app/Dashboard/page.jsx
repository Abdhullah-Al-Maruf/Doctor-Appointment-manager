import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Lightbulb, 
  Star 
} from 'lucide-react';

export const metadata = {
  title: "Dashboard — Your Health Overview",
  description:
    "View your health score, upcoming appointments, pending bookings, and personalized health tips. Your complete healthcare dashboard on DocAppoint.",
  robots: {
    index: false,
    follow: false,
  },
};

const Dashboard = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 space-y-8 pb-24 md:pb-12 text-slate-800">
      {/* Bento Grid Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Health Score (Primary Accent Card) */}
        <div className="bg-teal-50/60 backdrop-blur-md border border-teal-100/50 rounded-3xl p-6 flex flex-col justify-between min-h-[180px] shadow-xs">
          <div className="flex items-center justify-between">
            <Heart className="text-teal-600 fill-teal-600" size={32} />
            <span className="px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-semibold">
              Excellent
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Health Score</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-1">
              94<span className="text-lg md:text-xl font-bold text-slate-400">/100</span>
            </h2>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col justify-between min-h-[180px] shadow-xs">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100/50">
            <Calendar size={22} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total Appointments</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-1">12</h2>
          </div>
          <p className="text-xs font-semibold text-teal-600 flex items-center gap-1 mt-2">
            <TrendingUp size={14} />
            2 more than last month
          </p>
        </div>

        {/* Pending Bookings */}
        <div className="bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col justify-between min-h-[180px] shadow-xs">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100/50">
            <Clock size={22} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Pending Bookings</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-1">03</h2>
          </div>
          <p className="text-xs text-slate-500 mt-2">Check availability for next week</p>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Activities / Appointments Table */}
        <div className="lg:col-span-8">
           {/* Health Tip Card */}
          <div className="bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xs">
            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Lightbulb className="text-teal-600" size={20} />
              Health Tip
            </h4>
            <p className="text-sm text-slate-600 italic leading-relaxed">
              "Staying hydrated is crucial for cardiovascular health. Aim for at least 8 glasses of water a day to keep your heart pumping efficiently."
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400">Updated today</span>
              <button className="text-teal-600 hover:text-teal-700 font-semibold text-xs hover:underline cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel: Quick Actions & Tips */}
        <div className="lg:col-span-4 space-y-6">
          {/* Premium Upgrade CTA */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white rounded-3xl p-6 relative overflow-hidden shadow-md">
            <div className="relative z-10">
              <h4 className="text-lg md:text-xl font-bold mb-2">DocAppoint Pro</h4>
              <p className="text-sm opacity-90 mb-6">
                Get 24/7 priority access to top specialists and unlimited telehealth calls.
              </p>
              <button className="w-full py-3 bg-white text-teal-600 font-semibold text-sm rounded-2xl hover:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm">
                Upgrade Now
              </button>
            </div>
            <Star className="absolute -bottom-6 -right-6 text-teal-400/20 w-32 h-32" />
          </div>

         
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 bg-white/20 backdrop-blur-md border border-white/20 mt-10 rounded-3xl shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <span className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">DocAppoint</span>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Precision healthcare for a modern world. Empowering patients with seamless booking and digital health management.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-12 md:justify-end">
            <div className="space-y-4 min-w-[120px]">
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Product</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/all-appointments" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link href="/all-appointments" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">
                    Specialists
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 min-w-[120px]">
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Company</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-500 hover:text-teal-600 transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 text-center md:text-left">
          <p className="text-slate-400 text-xs">
            © 2026 DocAppoint. All rights reserved. Precision healthcare for a modern world.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;