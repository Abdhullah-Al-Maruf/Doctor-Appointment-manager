import ProfileCard from '@/components/cards/ProfileCard';
import React from 'react';

export const metadata = {
  title: "My Profile — Account Settings",
  description:
    "View and update your DocAppoint profile. Manage your personal information, medical preferences, and account settings.",
  robots: {
    index: false,
    follow: false,
  },
};

const ProfilePage = () => {
  return (
    <div>
  <ProfileCard/>
    </div>
  );
};

export default ProfilePage;