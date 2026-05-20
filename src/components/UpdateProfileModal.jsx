"use client";
import { authClient } from "@/lib/auth-client"; // import the auth client
import { useState } from "react";

import Image from "next/image";
import { Xmark } from "@gravity-ui/icons";
import { CgUserAdd } from "react-icons/cg";


export function UpdateProfileModal({ isOpen = true, onClose, image, name }) {
  const [avatarUrl, setAvatarUrl] = useState(image || "");
  const [previewImage, setPreviewImage] = useState(
    image && image.startsWith("http") ? image : "/placeholder-avatar.png",
  );
  const [fullName, setFullName] = useState(name || "");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    await authClient.updateUser({
      name,
      image: photo,
    });

    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={handleSaveChanges}>
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    />

    {/* Modal Container */}
    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl transition-all duration-200 ease-out">
      
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
      >
        <Xmark className="size-5" />
      </button>

      {/* Modal Content */}
      <div className="px-8 py-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1.5">
            Update Profile
          </h2>
          <p className="text-sm text-gray-500">
            Manage your public identity and account settings
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group mb-3">
            <div className="size-24 rounded-full overflow-hidden ring-4 ring-gray-100">
              <Image
                src={
                  isValidUrl(previewImage)
                    ? previewImage
                    : "/placeholder-avatar.png"
                }
                alt="Profile"
                width={100}
                height={100}
                className="size-full object-cover"
              />
            </div>

            <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
              <CgUserAdd className="size-6 text-white" />
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-5 mb-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2.5 border rounded-lg"
            placeholder="Enter your full name"
          />

          {/* Avatar URL */}
          <input
            type="url"
            name="photo"
            value={avatarUrl}
            onChange={(e) => {
              const value = e.target.value;
              setAvatarUrl(value);

              if (value.startsWith("http")) {
                setPreviewImage(value);
              }
            }}
            className="w-full px-4 py-2.5 border rounded-lg"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          
          {/* ✅ submit button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-teal-600 text-white rounded-lg"
          >
            Save Changes
          </button>

          {/* cancel button must NOT submit */}
          <button
            type="button"
            onClick={onClose}
            className="w-full px-6 py-2.5 text-gray-600"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  </div>
</form>
  );
}
