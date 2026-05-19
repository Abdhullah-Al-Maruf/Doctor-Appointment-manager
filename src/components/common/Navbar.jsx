"use client";
import { authClient } from "@/lib/auth-client"; // import the auth client
import { useState, useCallback } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import clsx from "clsx";
import { Avatar, Button } from "@heroui/react";
import Script from "next/script";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "All Appointments", href: "/all-appointments" },
  { name: "Dashboard", href: "/dashboard" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // for avatar and conditional sign in signup showing we need the session data
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const handleLogout = async () => {
      toast.info("Signout Successful");
      await authClient.signOut();
    };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/0 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center gap-2">
          {/* Load the DotLottie web component script */}
          <Script
            src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            type="module"
            strategy="lazyOnload"
          />
          <div className="w-[50px] h-[50px]">
            <dotlottie-player
              src="/health_insurance.lottie"
              background="transparent"
              speed="1"
              style={{ width: "50px", height: "50px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>

          <span className="bg-linear-to-b from-[#006b5f] to-[#14b8a6]  font-bold text-xl  bg-clip-text text-transparent">
            DocAppoint
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth */}

        {!user && (
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="text-gray-600 hover:text-teal-700 font-medium"
          >
            Login
          </Link>
          <Link href="/signup">
            <Button
              className={
                "bg-linear-to-b from-[#006b5f] to-[#14b8a6] shadow-lg shadow-[#14b8a6]/50"
              }
            >
              Register
            </Button>
          </Link>
        </div>
        )}
        {user && (
          <div className=" flex items-center ml-[120px]  gap-1 px-2 py-3 text-sm text-gray-700">
            <Link href={"/profile"}>
            
           <div>
     <Avatar>
              <Avatar.Image
                alt={user?.name || "User"}
                src={user?.image || undefined}
              />

              <Avatar.Fallback>
                {user?.name
                  ? user.name.trim().split(/\s+/)[0][0].toUpperCase()
                  : "U"}
              </Avatar.Fallback>
            </Avatar>
            <div className="block md:hidden text-sm font-medium text-gray-700">
              Hi,{user.name?.split(" ")[0] || "User"}
            </div>
           </div>
            </Link>
       
            <div>
              
              <Button
                onClick={handleLogout}
                className=" hidden md:block bg-linear-to-b from-[#006b5f] to-[#14b8a6] shadow-lg shadow-[#14b8a6]/50 w-full"
              >
                Logout
              </Button>
            </div>
          </div>
        )} 

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Side Drawer */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen w-[280px] bg-white/80 backdrop-blur-2xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden border-l border-white/30 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-5 flex justify-end">
          <button
            onClick={closeMenu}
            className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50/80 rounded-full transition-colors bg-white/50"
          >
            ✕
          </button>
        </div>

        <div className="px-5 flex flex-col gap-2 flex-grow overflow-y-auto mt-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link key={item.name} href={item.href} onClick={closeMenu} className="block">
                <div
                  className={clsx(
                    "px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-between group",
                    isActive
                      ? "bg-linear-to-r from-[#006b5f]/10 to-[#14b8a6]/10 text-[#006b5f] shadow-sm ring-1 ring-[#14b8a6]/20"
                      : "text-gray-700 hover:bg-teal-50/80 hover:text-teal-700"
                  )}
                >
                  {item.name}
                  <div
                    className={clsx(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      isActive
                        ? "bg-[#14b8a6] scale-100"
                        : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-teal-300"
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-5 border-t border-gray-200/40 bg-white/30 backdrop-blur-md">
          {!user ? (
            <div className="flex flex-col gap-3">
              <Link
                href="/signin"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-xl text-center font-medium text-gray-700 hover:bg-teal-50/80 hover:text-teal-700 transition-colors"
              >
                Login
              </Link>
              <Link href="/signup" onClick={closeMenu}>
                <Button className="bg-linear-to-b from-[#006b5f] to-[#14b8a6] text-white shadow-lg shadow-[#14b8a6]/40 w-full border-0">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <Link href={"/profile"} onClick={closeMenu}>
                <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-teal-50/50 transition-colors">
                  <Avatar>
                    <Avatar.Image
                      alt={user?.name || "User"}
                      src={user?.image || undefined}
                    />
                    <Avatar.Fallback>
                      {user?.name
                        ? user.name.trim().split(/\s+/)[0][0].toUpperCase()
                        : "U"}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="text-sm font-semibold text-gray-800">
                    {user.name?.split(" ")[0] || "User"}
                  </div>
                </div>
              </Link>
              <Button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="bg-linear-to-b from-[#006b5f] to-[#14b8a6] text-white shadow-lg shadow-[#14b8a6]/40 w-full border-0"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
