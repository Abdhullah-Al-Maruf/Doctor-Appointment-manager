"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";

export function AppointmentModal({ docName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Add doctor name dynamically
    data.doctorName = docName;
    

    
    try {
      const response = await fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
      toast.success("Appointment booked successfully!");
        setIsOpen(false);
        e.target.reset();
      }
    } catch (error) {
      toast.error("Failed to book appointment.");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-white text-teal-800 hover:bg-teal-700 hover:text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200"
      >
        Book Appointment
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-2xl bg-white/40 dark:bg-zinc-900/55 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-zinc-700/20 max-h-[90vh] overflow-y-auto">
            
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="p-6 pb-3 border-b border-gray-200 dark:border-zinc-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Book an Appointment</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Schedule your visit with {docName}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Doctor</label>
                  <input type="text" value={docName || ""} readOnly className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white cursor-not-allowed opacity-75" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Patient Name</label>
                    <input type="text" name="patientName" required placeholder="Enter patient name" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                    <select name="gender" required className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all">
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" name="phone" required placeholder="Enter phone number" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input type="email" name="userEmail" required placeholder="Enter email address" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Appointment Date</label>
                    <input type="date" name="appointmentDate" required className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Appointment Time</label>
                    <input type="time" name="appointmentTime" required className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-zinc-700">
                  <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-3 rounded-xl border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all">
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition-all">
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}