"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Clock, Heart, MapPin, Star } from "@gravity-ui/icons";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const data = {
  id: "d10",
  name: "Dr. Anika Sultana",
  specialty: "Oncologist",
  image: "https://images.pexels.com/photos/5215020/pexels-photo-5215020.jpeg",
  experience: "11 years",
  availability: [
    { day: "Sunday", slots: ["10:00 AM - 05:00 PM", "05:00 PM - 07:00 PM"] },
    { day: "Wednesday", slots: ["10:00 AM - 05:00 PM", "05:00 PM - 07:00 PM"] }
  ],
  rating: 4.9,
  reviews: 180,
  hospital: "National Cancer Institute",
  location: "Mohakhali, Dhaka",
  fee: 1500
};

const DoctorCard = () => {
  const {
    image,
    name,
    specialty,
    hospital,
    location,
    experience,
    rating,
    reviews,
    fee,
    id
  } = data;

  // Simple availability logic for demo
  const isAvailableToday = true;

  return (
    <div className="group relative w-full max-w-sm bg-white/30 rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
      
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Specialty Badge - Teal Color from Reference */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-teal-500 text-white text-xs font-bold tracking-wide shadow-sm">
          {specialty}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 pb-2">
        
        {/* Name & Hospital */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {hospital}
          </p>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm mb-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="font-semibold text-gray-900">{rating}</span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">{reviews} Reviews</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-4">
          <MapPin size={14} className="text-teal-600" />
          <span>{location}</span>
        </div>
      </div>

      {/* Bottom Info Bar - Matches Reference Layout */}
      <div className="bg-gray-50 p-4 flex items-center justify-between border-t border-gray-100">
        
        {/* Left: Experience & Fee */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock size={12} className="text-teal-600" />
            <span>{experience} Exp</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
            <FaBangladeshiTakaSign size={14} className="text-teal-600" />
            <span>{fee}</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Link href={`/doctors/${id}`} className="w-full">
            <Button
              variant="solid"
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-xl px-6 py-2 text-sm font-semibold shadow-sm transition-colors"
            >
              Book Now
            </Button>
          </Link>
          
          <button 
            aria-label="Add to favorites"
            className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;