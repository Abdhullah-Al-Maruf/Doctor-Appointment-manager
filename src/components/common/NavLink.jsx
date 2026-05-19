"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${
        isActive
           ? "border-b-2 border-teal-600 text-teal-600"
          : "text-black hover:text-teal-800"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;