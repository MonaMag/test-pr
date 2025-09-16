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
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href} className="w-full">
            <div
              className={`flex justify-center md:justify-start items-center w-full gap-3 p-3 cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-slate-300 border-l-4 border-slate-700 text-slate-700"
                  : "hover:bg-slate-100 text-gray-700"
              }`}
            >
              <span
                className={`transition-transform duration-200 ${
                  isActive ? "scale-110" : "hover:scale-110"
                }`}
              >
                {link.icon}
              </span>
              <span className="hidden md:inline">{link.label}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
