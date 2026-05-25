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

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined' && window._hasEnteredSite) {
      setIsInitialLoad(false);
    }
  }, []);

  useEffect(() => {
    const isInitial = typeof window !== 'undefined' ? !window._hasEnteredSite : true;
    const isHomepage = pathname === '/';

    if (isHomepage && !isInitial) {
      setShowLoader(false);
      setIsFadingOut(false);
      return;
    }

    setShowLoader(true);
    setIsFadingOut(false);

    const totalDuration = (isInitial && isHomepage) ? 3000 : 2200;
    const fadeOutStart = (isInitial && isHomepage) ? 2700 : 2000;

    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, fadeOutStart);

    const hideTimeout = setTimeout(() => {
      setShowLoader(false);
      setIsFadingOut(false);
      if (typeof window !== 'undefined') {
        window._hasEnteredSite = true;
      }
      setIsInitialLoad(false);
    }, totalDuration);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname]);

  const renderLoader = () => {
    if (!showLoader || !isMounted) return null;

    const isFullScreenLoader = isInitialLoad && pathname === '/';

    if (isFullScreenLoader) {
      return createPortal(
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Loading isFullScreen={true} duration={2600} />
        </div>,
        document.body
      );
    } else {
      // ✅ Only change — top-16 replaced with CSS variable via style prop
      return (
        <div
          className={`fixed bottom-0 inset-x-0 z-40 transition-opacity duration-300 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ top: 'var(--navbar-height, 64px)' }}
        >
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