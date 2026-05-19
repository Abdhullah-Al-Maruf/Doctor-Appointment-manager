"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LeftSide = () => {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center p-10 bg-white/5 backdrop-blur-md border-r border-white/10 min-h-[600px]">
      <div className="w-full max-w-md h-[400px]">
        <DotLottieReact
          src="/loginanimation.json"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default LeftSide;