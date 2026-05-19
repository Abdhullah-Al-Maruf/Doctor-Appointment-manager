"use client";
// import { authClient } from "@/lib/auth-client"; // import the auth client
import { useState, useCallback } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import clsx from "clsx";
import { Avatar, Button } from "@heroui/react";
import Script from "next/script";
// import { toast } from "react-toastify";

const navItems = [
  { name: "Home", href: "/" },
  { name: "All Appointments", href: "/all-appointments" },
  { name: "Dashboard", href: "/dashboard" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // for avatar and conditional sign in signup showing we need the session data
  //   const userData = authClient.useSession();
  //   const user = userData.data?.user;
  //   const handleLogout = async () => {
  //     toast.info("Signout Successful");
  //     await authClient.signOut();
  //   };

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

        {/* {!user && ( */}
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
        {/* )} */}
        {/* {user && (
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
                className=" hidden md:block bg-linear-to-b from-[#ff6b00] to-[#ff3d00] w-full"
              >
                Logout
              </Button>
            </div>
          </div>
        )} */}

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-4 mt-3 rounded-2xl border bg-white shadow-lg p-3 space-y-2">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} onClick={closeMenu}>
              <div className="px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition flex justify-between">
                {item.name}
                <span>→</span>
              </div>
            </NavLink>
          ))}

          <div className="border-t my-2"></div>
          {/* <div>
            {!user && (
              <div>
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-600"
                >
                  Login
                </Link>

                <Link href="/signup" onClick={closeMenu}>
                  <Button className="bg-linear-to-b from-[#ff6b00] to-[#a04100] w-full">
                    Register
                  </Button>
                </Link>
              </div>
            )}
            {user && (
              <Button
                onClick={handleLogout}
                className="bg-linear-to-b  from-[#ff6b00] to-[#ff3d00] w-full"
              >
                Logout
              </Button>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
