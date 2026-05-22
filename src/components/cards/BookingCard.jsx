"use client";
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
} from "lucide-react";
import { Button, Chip, Separator } from '@heroui/react';
import { TrashBin } from "@gravity-ui/icons";
import { UpdateAppointmentModal } from "../UpdateAppointmentModal";
import { deleteAppointment } from "@/utils/actions";
import { toast } from "react-toastify";
import { DeleteModal } from "../DeleteModal";

// Helper to format date nicely
const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const BookingCard = ({ booking }) => {
  // Destructure based on your specific JSON structure
  const { 
    _id, 
    doctorName, 
    patientName, 
    appointmentDate, 
    appointmentTime, 
    phone, 

    gender 
  } = booking;

  // Default status if not provided in API
  const status = booking.status || "Confirmed"; 

  return (
    <div className="w-full bg-white/60 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group">
      
      {/* Left Section: Patient & Doctor Info */}
      <div className="p-5 sm:p-6 flex-1">
        
        {/* Header: Status & ID */}
        <div className="flex justify-between items-start mb-4">
          <Chip 
            size="sm" 
            variant="flat" 
            color={status === "Confirmed" ? "success" : status === "Pending" ? "warning" : "danger"}
            className="font-semibold uppercase tracking-wide text-xs"
          >
            {status}
          </Chip>
          <span className="text-xs text-gray-400 font-mono">ID: #{_id.slice(-6)}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Doctor Column */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Doctor</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                <User size={20} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-tight">{doctorName}</p>
               
              </div>
            </div>
          </div>

          {/* Patient Column */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Patient</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <User size={20} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-tight capitalize">{patientName}</p>
                <p className="text-sm text-gray-500">{gender}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-5" />

        {/* Appointment Details Row */}
        <div className="flex flex-wrap gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar size={18} className="text-teal-600" />
            <div>
              <p className="text-xs text-gray-400">Date</p>
              <p className="font-semibold">{formatDate(appointmentDate)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Clock size={18} className="text-teal-600" />
            <div>
              <p className="text-xs text-gray-400">Time</p>
              <p className="font-semibold">{appointmentTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={18} className="text-teal-600" />
            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="font-semibold">{phone}</p>
            </div>
           
          </div>
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="bg-white/20 sm:bg-transparent p-5 sm:p-6 sm:border-l border-gray-100 flex flex-col justify-center sm:w-auto min-w-[160px] gap-5">
        <div className="flex flex-col gap-3 w-full">
     <UpdateAppointmentModal  id={_id} initialData={booking}/>
          
        <DeleteModal id={_id} doctor={doctorName} />
        </div>
      </div>

    </div>
  );
};

export default BookingCard;