'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Katterina<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            {/* <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/contact">Contact</NavItem> */}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavItem href="/">Home</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
            {/* <MobileNavItem href="/projects">Projects</MobileNavItem>
            <MobileNavItem href="/contact">Contact</MobileNavItem> */}
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
    >
      {children}
    </Link>
  );
}

function MobileNavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-gray-700 hover:text-blue-600 text-base font-medium transition"
    >
      {children}
    </Link>
  );
}
