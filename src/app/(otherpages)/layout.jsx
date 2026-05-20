'use client';

import Footer from '@/components/common/Footer';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import Loading from './loading';

const CommonLayout = ({ children }) => {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Check initial entry status on mount
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined' && window._hasEnteredSite) {
      setIsInitialLoad(false);
    }
  }, []);

  useEffect(() => {
    // Show loader on page entry / pathname change
    setShowLoader(true);
    setIsFadingOut(false);

    // Determine if this is a true initial load using window reference to handle layout remounts
    const isInitial = typeof window !== 'undefined' ? !window._hasEnteredSite : true;
    const isHomepage = pathname === '/';
    
    // Homepage initial entry gets 3 seconds, all other loads/transitions get 2.2 seconds (matching the 2-second progress bar)
    const totalDuration = (isInitial && isHomepage) ? 3000 : 2200;
    const fadeOutStart = (isInitial && isHomepage) ? 2700 : 2000;

    // After fadeOutStart, start fade-out animation
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, fadeOutStart);

    // After totalDuration, hide the loader completely
    const hideTimeout = setTimeout(() => {
      setShowLoader(false);
      setIsFadingOut(false);
      if (typeof window !== 'undefined') {
        window._hasEnteredSite = true;
      }
      setIsInitialLoad(false); // Disable full-screen loader for future inner navigations
    }, totalDuration);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname]);

  const renderLoader = () => {
    if (!showLoader || !isMounted) return null;

    // Full screen loader is ONLY for the homepage initial entrance
    const isFullScreenLoader = isInitialLoad && pathname === '/';

    if (isFullScreenLoader) {
      // Use portal to render directly to document.body, fully covering the Navbar
      return createPortal(
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Loading isFullScreen={true} duration={2600} />
        </div>,
        document.body
      );
    } else {
      // Render inline under the main navbar
      return (
        <div className={`fixed top-16 bottom-0 inset-x-0 z-40 transition-opacity duration-300 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Loading isFullScreen={false} duration={800} />
        </div>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {renderLoader()}
      <div className="flex-grow flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;