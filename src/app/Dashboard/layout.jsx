'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '../(otherpages)/loading';

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Show loader on page entry / pathname change
    setShowLoader(true);
    setIsFadingOut(false);

    // Page-level transition loader duration aligned with the 2-second progress bar
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    const hideTimeout = setTimeout(() => {
      setShowLoader(false);
      setIsFadingOut(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname]);

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col">
      {showLoader && isMounted && (
        <div className={`fixed top-16 bottom-0 inset-x-0 z-40 transition-opacity duration-300 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Loading isFullScreen={false} />
        </div>
      )}
      <div className="flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
