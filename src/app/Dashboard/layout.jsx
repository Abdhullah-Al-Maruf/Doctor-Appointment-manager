'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { 
  LayoutDashboard, 
  Calendar, 
  User, 
  LogOut, 
  Bell,
  Menu,
  X,
  Home
} from 'lucide-react';
import { Avatar } from '@heroui/react';

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  
  // 1. Use mounted state to prevent hydration mismatch for user data
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show per-page spinner on route change
  useEffect(() => {
    setPageLoading(true);
    const timer = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  const SimpleSpinner = () => (
    <div className="flex justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin"></div>
    </div>
  );

  const session = authClient.useSession();
  const user = session.data?.user;

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const handleLogout = async (e) => {
    e.preventDefault();
    toast.success("Logout successful", {
      position: "top-center",
      autoClose: 1000,
    });
    await authClient.signOut();
    router.push('/');
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Bookings', href: '/dashboard/my-booking', icon: Calendar },
    { name: 'My Profile', href: '/dashboard/profile', icon: User },
  ];

  // 2. Helper to safely get the first name only after mounting
  const getFirstName = () => {
    if (!mounted || !user?.name) return "User";
    return user.name.split(' ')[0];
  };

  const getInitials = () => {
    if (!mounted || !user?.name) return "U";
    return user.name.trim().split(/\s+/)[0][0].toUpperCase();
  };

  return (
    <div className="relative h-screen flex flex-col overflow-hidden text-slate-800">
      {/* Dashboard Layout Wrapper */}
      <div className="flex h-screen overflow-hidden">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden md:flex flex-col w-72 backdrop-blur-md border-r border-white/20 z-40 bg-white/10">
          <div className="p-8">
            <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
              DocAppoint
            </Link>
          </div>
          <nav className="flex-1 px-4 space-y-2 mt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm shadow-teal-600/30 font-medium'
                      : 'text-slate-600 hover:bg-white/25 hover:text-teal-700'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="p-4 mt-auto border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-rose-600 hover:bg-rose-500/10 transition-all duration-300 text-left font-medium cursor-pointer"
            >
              <LogOut size={20} />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar Drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5 flex items-center justify-between border-b border-slate-100">
            <Link href="/" className="text-xl font-bold text-slate-900">
              DocAppoint
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-600 text-white font-medium'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-teal-700'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400'} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="p-3 border-t border-slate-100">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors text-left font-medium cursor-pointer"
            >
              <LogOut size={20} />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col overflow-y-auto bg-transparent">
          {/* Top App Bar */}
          <header className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md border-b border-white/20 bg-white/30">
            <div className="flex items-center gap-3">
              {/* Hamburger button - mobile only */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <Menu size={22} />
              </button>
              <div className="md:hidden">
                <Link href="/" className="text-xl font-bold text-slate-900">
                  DocAppoint
                </Link>
              </div>
            </div>
            
            {/* 3. Use the safe helper functions here */}
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-slate-900">
                Welcome back, {getFirstName()}
              </h1>
              <p className="text-sm text-slate-500">
                Your health overview is looking great today.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 border border-white/30 shadow-xs hover:bg-white/80 transition-all cursor-pointer">
                <Bell size={20} className="text-slate-600" />
              </button>
              <Link href="/dashboard/profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-teal-500 block">
                <Avatar>
                  {/* 4. Use safe helpers for Avatar as well */}
                  <Avatar.Image alt={mounted && user?.name ? user.name : "User"} src={mounted && user?.image ? user.image : undefined} />
                  <Avatar.Fallback>{getInitials()}</Avatar.Fallback>
                </Avatar>
              </Link>
            </div>
          </header>

          {/* Children Dashboard Pages */}
          <div className="flex-grow">
            {pageLoading ? <SimpleSpinner /> : children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;