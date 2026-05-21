import SmallFooter from "@/components/SmallFooter";
import React from "react";

export const metadata = {
  title: "Sign In or Sign Up",
  description:
    "Access your DocAppoint account to manage appointments, view bookings, and connect with healthcare providers. Sign in or create a new account.",
  robots: {
    index: false,
    follow: true,
  },
};

const loginLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] justify-between">
      <div className="flex-grow flex items-center justify-center w-full">
        {children}
      </div>
      <SmallFooter />
    </div>
  );
};

export default loginLayout;
