'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

const pathname = usePathname();

const links = [
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/about', label: 'About', icon: 'about' },
    { href: '/user', label: 'User', icon: 'user' },
    { href: '/statistics', label: 'Statistics', icon: 'statistics' },
    { href: '/settings', label: 'Settings', icon: 'settings' },
  ];


  return (
    <nav className="flex flex-col py-4">
      {links.map(link => (
      <Link key={link.href} href={link.href} className="w-full">
        <div
          className={`flex items-center w-full p-3 cursor-pointer transition-all duration-200 ${
            pathname === link.href ? 'bg-gray-400' : 'hover:bg-gray-200'
          }`}
        >
          {link.icon}
        </div>
      </Link>
    ))}
    </nav>
  );
}
