import SmallFooter from "@/components/SmallFooter";
import React from "react";

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
