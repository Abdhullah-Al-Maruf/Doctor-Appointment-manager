"use client"
import { Avatar, Button } from '@heroui/react';

import { CalendarDays, Star } from 'lucide-react';


import React from "react";
import { AppointmentModal } from '../AppointmentModal';
//  this data will remove when get data from server
const data = {
  id: "d10",
  name: "Dr. Anika Sultana",
  specialty: "Oncologist",
  image: "https://images.pexels.com/photos/5215020/pexels-photo-5215020.jpeg",
  experience: "11 years",
  availability: [
    { day: "Sunday,", slots: ["10:00 AM - 05:00 PM", "05:00 PM - 07:00 PM"] },
    { day: "Wednesday", slots: ["10:00 AM - 05:00 PM", "05:00 PM - 07:00 PM"] },
  ],
  rating: 4.9,
  reviews: 180,
  hospital: "National Cancer Institute",
  location: "Mohakhali, Dhaka",
  fee: 1500,
};

const DoctorIntroCard = ({ doctorData }) => {

  const {
    image,
    specialty,
    availability,
    name,
    rating,
    reviews,
    fee
  } = doctorData || data;

  // Get the next available day simply
  const nextAvailable = availability[0];

  return (
    <div className="mt-8">
      <div className=" max-w-7xl  rounded-md mx-auto border bg-white/0 backdrop-blur-md shadow-lg">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">

            {/* Left Section: Doctor Info */}
            <div className="flex items-center gap-4 min-w-0">
              <Avatar>
                <Avatar.Image

                  alt={name}
                  src={image} 
                  className='object-cover'/>
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>

              <div className="flex flex-col justify-center min-w-0">
                <h2 className="text-xl font-bold text-foreground truncate leading-tight">
                  {name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                    {specialty}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-default-500">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{rating}</span>
                    <span>({reviews})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section: Availability (Hidden on small mobile) */}
            <div className="hidden md:flex flex-col justify-center border-l border-r border-default-200 px-6 mx-4">
              <span className="text-xs font-semibold text-default-400 uppercase tracking-wider">
                Next Available
              </span>
              <div className="flex items-center gap-2 mt-1">
                <CalendarDays size={16} className="text-default-500" />
                <span className="text-sm font-medium text-foreground">
                  {nextAvailable.day}, {nextAvailable.slots[0]}
                </span>
              </div>
            </div>

            {/* Right Section: Action & Fee */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs text-default-400">Consultation Fee</span>
                <span className="text-lg font-bold text-foreground">৳{fee}</span>
              </div>
              <AppointmentModal />
            </div>

          </div>

          {/* Mobile Only: Quick Availability View */}
          <div className="md:hidden pb-3 pt-1 border-t border-default-100 mt-2">
            <div className="flex items-center gap-2 text-xs text-default-600">
              <CalendarDays size={14} />
              <span>Next: <strong>{nextAvailable.day}</strong> ({nextAvailable.slots[0]})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorIntroCard;
