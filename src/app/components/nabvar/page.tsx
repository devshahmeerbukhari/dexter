"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [path, setPath] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const LinkWithHover = ({ href, label }) => (
    <Link
      href={href}
      className={`relative group hover:text-blue-300 ${
        path === href ? "text-[#4FC3F7]" : "text-white"
      }`}
      onClick={() => setPath(href)}
    >
      <span className="relative inline-block">
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </span>
    </Link>
  );

  // const handleServicesClick = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  //   setPath("/components/services");
  // };

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-900 bg-opacity-80 backdrop-blur-sm text-white z-50">
      <div className="flex justify-between items-center px-6 sm:px-12 lg:px-20 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/logo/dexterzsol_logow.png"
            alt="Dexterz Sol Logo"
            width={1000}
            height={1000}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-2xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <LinkWithHover href="/" label="Home" />
          <LinkWithHover href="/components/about" label="About" />
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href={"/components/services"}
              className={`relative group hover:text-blue-300 ${
                path === "/components/services" ? "text-[#4FC3F7]" : "text-white"
              }`}
              onClick={() => setPath("/components/services")}
            >
              <span className="relative inline-block">
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </span>
            </Link>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 bg-blue-900 bg-opacity-95 text-white shadow-lg rounded-lg py-2 w-48 z-50">
                <Link
                  href="/components/servicesDetails/AppDevelopment"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  App Development
                </Link>
                <Link
                  href="/components/servicesDetails/GenerativeAI"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Generative AI
                </Link>
                <Link
                  href="/components/servicesDetails/WebDevelopment"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/components/servicesDetails/DatabaseSecurity"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Database Security
                </Link>
                <Link
                  href="/components/servicesDetails/BlockchainDevelopment"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Blockchain Development
                </Link>
                <Link
                  href="/components/servicesDetails/UIUXDesign"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  UI/UX Design
                </Link>
                <Link
                  href="/components/servicesDetails/GameDevelopment"
                  className="block px-4 py-2 hover:bg-blue-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Game Development
                </Link>
              </div>
            )}
          </div>
          <LinkWithHover href="/components/projects" label="Projects" />
          <LinkWithHover href="/components/contact" label="Contact" />
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden transition-all duration-300 transform ${
          isMenuOpen
            ? "max-h-[300px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        } overflow-hidden bg-blue-900 bg-opacity-90`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link
            href="/"
            className="hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/components/about"
            className="hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/components/services"
            className="hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/components/projects"
            className="hover:text-blue-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/components/contact"
            className="hover:text-blue-300"
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
