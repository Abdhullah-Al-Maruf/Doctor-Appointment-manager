import SmallFooter from "@/components/SmallFooter";
import React from "react";

const loginLayout = ({ children }) => {
  return (
    <div>
      {children}
      <SmallFooter />
    </div>
  );
};

export default loginLayout;
