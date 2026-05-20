"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Chip } from "@heroui/react";

import React, { useState } from "react";
import { UpdateProfileModal } from "../UpdateProfileModal";

// Simple SVG Icons for the design
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

const HeartRateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);



const EmergencyContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);


const ProfileCard = () => {
const [modal,setModal]=useState(false)
  const session = authClient.useSession();
  const user = session.data?.user;


  return (
    <div className="bg-white/40 p-4 sm:p-8 min-h-screen font-sans">
      {/* Main Profile Card */}
      <div className="max-w-5xl mx-auto border bg-white/0 backdrop-blur-md shadow-lg rounded-3xl p-6 md:p-10 mb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left Column: Avatar & Verification */}
          <div className="flex flex-col items-center text-center w-full md:w-auto">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <Avatar className="w-full h-full">
                <Avatar.Image
                  alt={user?.name || "User"}
                  src={user?.image || undefined}
                />
                <Avatar.Fallback>
                  {user?.name ? user.name.trim().split(/\s+/)[0][0].toUpperCase() : "U"}
                </Avatar.Fallback>
              </Avatar>
            </div>
            <div className="mt-4 space-y-2">
              <Chip size="sm" variant="flat" color="success" className="bg-green-100 text-green-800">Verified Profile</Chip>
              <p className="text-gray-500 text-sm">Member since {new Date().getFullYear()}</p>
            </div>
          </div>

          {/* Right Column: Personal Details */}
          <div className="flex-grow w-full">
            <div className="grid grid-cols-1  gap-x-8 gap-y-6">
              <DetailItem label="FULL NAME" value={user?.name} />
              <DetailItem label="EMAIL ADDRESS" value={user?.email} />
            </div>

            <div className="mt-10 flex">
              <button
                  onClick={()=>setModal(true)}
              className="bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-teal-800 transition-colors shadow-md">
                <EditIcon />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Health Stats & Emergency Contact */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Recent Health Stats Card */}
        <div className="border bg-white/0 backdrop-blur-md shadow-lg rounded-3xl  p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Health Stats</h2>
            <HeartRateIcon />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatBox

              title="Heart Rate" value="72" unit="bpm" />
            <StatBox title="Weight" value="64" unit="kg" />
          </div>
        </div>

        {/* Emergency Contact Card */}
        <div className="border bg-white/0 backdrop-blur-md shadow-lg rounded-3xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Emergency Contact</h2>
            <EmergencyContactIcon />
          </div>
          <div className="flex items-center gap-4">
            <Avatar
              name="RD"
              className="w-12 h-12 text-lg bg-red-100 text-red-600"
            />
            <div>
              <p className="font-semibold text-gray-800">Hablu bai (Spouse)</p>
              <p className="text-gray-500 text-sm">+01753905686</p>
            </div>
          </div>
        </div>

      </div>
      
     <UpdateProfileModal
  isOpen={modal}
  image={user?.image}
  name={user?.name}
  onClose={()=>setModal(false)}
/>
    </div>
  );
};

// Reusable sub-components for cleaner code
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
    <p className="text-lg text-gray-800 mt-1">{value}</p>
  </div>
);

const StatBox = ({ title, value, unit }) => (
  <div className="bg-gray-100 rounded-2xl p-4">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-3xl font-bold text-teal-700 mt-1">
      {value} <span className="text-base font-normal text-gray-600">{unit}</span>
    </p>
  </div>
);

export default ProfileCard;