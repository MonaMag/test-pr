"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import UserIcon from "./icons/UserIcon";
import StatisticsIcon from "./icons/StatisticsIcon";
import SettingsIcon from "./icons/SettingsIcon";

const links = [
  { href: "/", label: "Home", icon: <HomeIcon className="w-6 h-6" /> },
  { href: "/about", label: "About", icon: <AboutIcon className="w-6 h-6" /> },
  { href: "/user", label: "User", icon: <UserIcon className="w-6 h-6" /> },
  {
    href: "/statistics",
    label: "Statistics",
    icon: <StatisticsIcon className="w-6 h-6" />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <SettingsIcon className="w-6 h-6" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col py-4">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="w-full">
          <div
            className={`flex items-center w-full p-3 cursor-pointer transition-all duration-200 ${
              pathname === link.href ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
          >
            {link.icon}
          </div>
        </Link>
      ))}
    </nav>
  );
}
