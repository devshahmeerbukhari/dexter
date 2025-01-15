"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const dropdownItems = [
  {
    label: "App Development",
    href: "/components/servicesDetails/AppDevelopment",
  },
  {
    label: "Generative AI",
    href: "/components/servicesDetails/GenerativeAI",
  },
  {
    label: "Web Development",
    href: "/components/servicesDetails/WebDevelopment",
  },
  {
    label: "Database Security",
    href: "/components/servicesDetails/DatabaseSecurity",
  },
  {
    label: "Blockchain Development",
    href: "/components/servicesDetails/BlockchainDevelopment",
  },
  {
    label: "UI/UX Design",
    href: "/components/servicesDetails/UIUXDesign",
  },
  {
    label: "Game Development",
    href: "/components/servicesDetails/GameDevelopment",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [path, setPath] = useState("");
  const pathmame = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // console.log(pathmame)

  // useEffect(() => {
  //   // Set path based on current URL
  //   setPath(window.location.pathname);
  // }, []);

  const LinkWithHover = ({ href, label }) => (
    <Link
      href={href}
      className={`relative group ${
        pathmame === href
          ? "bg-blue-500 px-2 rounded-3xl text-white"
          : "text-black px-2"
      }`}
      // onClick={() => setPath(href)}
    >
      <span className="relative inline-block">
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </span>
    </Link>
  );

  return (
    <div className="w-full bg-white bg-opacity-95 shadow-lg backdrop-blur-sm text-white relative z-50">
      <div className="lg:mx-20 mx-5">
        <div className="flex justify-between items-center sm:px-12 lg:px-20 h-16">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <Image
              src="/assets/images/logo/dexterzsol_logo.png"
              alt="Dexterz Sol Logo"
              width={1000}
              height={1000}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Menu Button (Medium & Small Screens) */}
          <button
            className="md:block lg:hidden text-2xl text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex px-6 py-1 rounded-full items-center space-x-8 font-medium">
            <LinkWithHover href="/" label="Home" />
            <LinkWithHover href="/components/about" label="About" />
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/components/services"
                className={`relative group ${
                  pathmame.includes("/components/services")
                    ? "bg-blue-500 px-2 rounded-3xl text-white"
                    : "text-black px-2"
                }`}
                // onClick={() => setPath("/components/services")}
              >
                <span className="relative inline-block">
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
              </Link>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 bg-blue-50 bg-opacity-95 text-black shadow-lg rounded-lg py-2 w-48 z-40">
                  {dropdownItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-white z-50"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        // setPath("/components/services");
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <LinkWithHover href="/components/projects" label="Projects" />
          </div>
          <Link
            href={"/components/contact"}
            className="hidden lg:block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 py-2 px-4 rounded-lg"
            // onClick={() => setPath("/components/contact")}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile & Medium Links */}
      <div
        className={`lg:hidden transition-all duration-300 transform ${
          isMenuOpen
            ? "max-h-[300px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        } overflow-hidden bg-gradient-to-r from-[#6868dd] to-[#69afff] text-white shadow-lg rounded-md`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 text-white">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 -ml-3 py-2 hover:bg-blue-600 hover:bg-opacity-75 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-home"></i> Home
          </Link>
          <Link
            href="/components/about"
            className="flex items-center gap-2 px-4 -ml-3 py-2 hover:bg-blue-600 hover:bg-opacity-75 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-info-circle"></i> About
          </Link>
          <Link
            href="/components/services"
            className="flex items-center gap-2 px-4 py-2 hover:bg-blue-600 hover:bg-opacity-75 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-concierge-bell"></i> Services
          </Link>
          <Link
            href="/components/projects"
            className="flex items-center gap-2 px-4 py-2 hover:bg-blue-600 hover:bg-opacity-75 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-briefcase"></i> Projects
          </Link>
          <Link
            href="/components/contact"
            className="flex items-center gap-2 px-4 py-2 hover:bg-blue-600 hover:bg-opacity-75 rounded-md transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
