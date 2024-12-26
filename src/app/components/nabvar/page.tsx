"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-blue-100">
      <div className="flex justify-between items-center px-4 sm:px-10 lg:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/logo/dexterzsol_logo.png"
            alt="Dexterz Sol Logo"
            width={96} // Adjust as needed
            height={96} // Adjust as needed
            className="h-24 w-auto object-contain"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex font-bold items-center space-x-4">
          <Link href="/" className="pr-10 hover:text-blue-600">
            Home
          </Link>
          <Link href="/components/about" className="pr-10 hover:text-blue-600">
            About
          </Link>
          <Link
            href="/components/services"
            className="pr-10 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/components/projects"
            className="pr-10 hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            href="/components/contact"
            className="pr-10 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 pb-4 font-bold bg-slate-200">
          <Link
            href="/"
            className="hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/components/about"
            className="hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/components/services"
            className="hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/components/projects"
            className="hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/components/contact"
            className="hover:text-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
