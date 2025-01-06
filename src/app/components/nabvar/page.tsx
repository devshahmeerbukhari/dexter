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

  const handleServicesClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setPath("/components/services");
  };

  return (
    <div className="bg-blue-50">
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
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`relative hover:text-blue-600 ${
                path === "/components/services" ? "text-blue-600" : "text-black"
              }`}
              onClick={handleServicesClick}
            >
              <Link
                href={`/components/services`}
                className={`relative group hover:text-blue-600 ${
                  path === '/components/services' ? "text-blue-600" : "text-black"
                }`}
                onClick={() => setPath('/components/services')}
              >
                <span className="relative inline-block">
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
              </Link>
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute top-[90%] left-0 bg-white shadow-lg rounded-lg mt-1 p-2 w-48 z-50"
                onMouseEnter={() => setIsDropdownOpen(true)} // Keep open when hovering dropdown
                onMouseLeave={() => setIsDropdownOpen(false)} // Close when leaving dropdown
              >
                <Link
                  href="/components/servicesDetails/AppDevelopment"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  App Development
                </Link>
                <Link
                  href="/components/servicesDetails/GenerativeAI"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Generative AI
                </Link>
                <Link
                  href="/components/servicesDetails/WebDevelopment"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/components/servicesDetails/DatabaseSecurity"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Database Security
                </Link>
                <Link
                  href="/components/servicesDetails/BlockchainDevelopment"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Blockchain Development
                </Link>
                <Link
                  href="/components/servicesDetails/UIUXDesign"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  UI/UX Design
                </Link>
                <Link
                  href="/components/servicesDetails/GameDevelopment"
                  className="block px-4 py-2 hover:bg-blue-100"
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
        {/* <div>
          <Link
            href="/components/contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 hover:shadow-xl transform transition-all duration-300 hover:scale-110 focus:ring focus:ring-purple-300"
          >
            Schedule Strategy Call
          </Link>
        </div> */}
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
