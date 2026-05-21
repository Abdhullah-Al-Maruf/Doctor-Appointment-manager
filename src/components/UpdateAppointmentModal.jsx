"use client";

import { useState } from "react";
import { Edit, X } from "lucide-react";
import { toast } from "react-toastify";
import { updateAppointment } from "@/utils/actions";

export function UpdateAppointmentModal({ id, initialData }) {
  const [isOpen, setIsOpen] = useState(false);

  // Ensure initialData exists before accessing properties to prevent crashes
  const safeData = initialData || {};

  const handleSubmit = async (formData) => {
    try {


        formData.append("doctorName", safeData.doctorName || "");
      await updateAppointment(id, formData);
      toast.success("Appointment updated successfully!");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Update failed!");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center gap-2 hover:bg-teal-700 transition"
      >
        <Edit size={18} /> Update
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl animate-in fade-in zoom-in duration-200">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Update Appointment</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* FORM */}
            <form action={handleSubmit} className="space-y-4">

              {/* Doctor (read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
                <input
                  value={safeData.doctorName || ""} // Fix: Default to empty string
                  readOnly
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed text-gray-600"
                />
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                <input
                  name="patientName"
                  placeholder="Enter patient name"
                  defaultValue={safeData.patientName || ""} // Fix: Default to empty string
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  name="phone"
                  placeholder="Enter phone number"
                  defaultValue={safeData.phone || ""} // Fix: Default to empty string
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  defaultValue={safeData.gender || ""} // Fix: Default to empty string
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    defaultValue={safeData.appointmentDate ? safeData.appointmentDate.split('T')[0] : ""} // Fix: Handle date format if needed
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    name="appointmentTime"
                    defaultValue={safeData.appointmentTime || ""} // Fix: Default to empty string
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md"
                >
                  Update Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}