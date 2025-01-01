"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [path, setPath] = useState("/");

  const LinkWithHover = ({ href, label }) => (
    <Link
      href={href}
      className={`relative group hover:text-blue-600 ${
        path === href ? "text-blue-600" : "text-black"
      }`}
      onClick={() => setPath(href)}
    >
      <span className="relative inline-block">
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </span>
    </Link>
  );

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
          className="md:hidden block text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex font-bold items-center space-x-16">
          <LinkWithHover href="/" label="Home" />
          <LinkWithHover href="/components/about" label="About" />
          <LinkWithHover href="/components/services" label="Services" />
          <LinkWithHover href="/components/projects" label="Projects" />
          <LinkWithHover href="/components/contact" label="Contact" />
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden transition-all duration-700 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] transform ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        } overflow-hidden`}
        style={{ transitionProperty: "max-height, opacity, transform" }}
      >
        <div className="flex flex-col items-center space-y-4 pb-4 font-bold bg-blue-200">
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
      </div>
    </div>
  );
}

export default Navbar;
