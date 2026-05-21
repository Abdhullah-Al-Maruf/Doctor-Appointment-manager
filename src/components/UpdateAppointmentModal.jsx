"use client";

import { useState } from "react";
import { Edit, X } from "lucide-react";
import { toast } from "react-toastify";
import { updateAppointment } from "@/utils/actions";

export function UpdateAppointmentModal({ id, initialData }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      await updateAppointment(id, formData);

      toast.success("Appointment updated successfully!");
      setIsOpen(false);
    } catch (error) {
      toast.error("Update failed!");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-teal-600 text-white rounded-lg"
      >
        <Edit/> Update
        
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6">

            {/* Header */}
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Update Appointment</h2>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            {/* SERVER ACTION FORM */}
            <form action={handleSubmit} className="space-y-4">

              {/* Doctor (read-only) */}
              <input
                value={initialData.doctorName}
                readOnly
                className="w-full px-3 py-2 bg-gray-100 rounded-lg cursor-not-allowed"
              />

              <input
                name="patientName"
                placeholder="patient name"
                defaultValue={initialData.patientName}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                name="phone"
                placeholder="phone number"
                defaultValue={initialData.phone}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                name="gender"
                placeholder="gender"
                defaultValue={initialData.gender}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                type="date"
                name="appointmentDate"
                defaultValue={initialData.appointmentDate}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <input
                type="time"
                name="appointmentTime"
                defaultValue={initialData.appointmentTime}
                className="w-full px-3 py-2 border rounded-lg"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}