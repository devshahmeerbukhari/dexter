import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link"; // Importing Link for client-side navigation
import Image from "next/image";

function Footer() {
  return (
    <footer className="relative z-50 bg-gradient-to-r from-[#090916] to-[#283888] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo/dexterzsol_logow.png"
              alt="Dexterz Sol Logo"
              width={500} // Adjust width as per your requirements
              height={500} // Adjust height as per your requirements
              className="h-24 w-auto object-contain"
            />

            {/* <h1 className="text-2xl font-bold">Dexterz Sol</h1> */}
          </div>
          <p className="mt-4 text-gray-400">
            Crafting Code, Building Futures. Empowering your digital journey
            with precision and passion.
          </p>
          <div className="flex space-x-3 mt-4">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <XIcon />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <YouTubeIcon />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/components/about" className="hover:underline">
                &raquo; About Us
              </Link>
            </li>
            <li>
              <Link href="/components/services" className="hover:underline">
                &raquo; Our Services
              </Link>
            </li>
            <li>
              <Link href="/components/contact" className="hover:underline">
                &raquo; Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/components/servicesDetails/WebDevelopment" className="hover:underline">
                &raquo; Web Development
              </Link>
            </li>
            <li>
              <Link href="/components/servicesDetails/AppDevelopment" className="hover:underline">
                &raquo; App Development
              </Link>
            </li>
            <li>
              <Link href="/components/servicesDetails/GenerativeAI" className="hover:underline">
                &raquo; Generative AI
              </Link>
            </li>
            <li>
              <Link href="/components/servicesDetails/GameDevelopment" className="hover:underline">
                &raquo; Game Development
              </Link>
            </li>
            <li>
              <Link href="/components/servicesDetails/BlockchainDevelopment" className="hover:underline">
                &raquo; Blockchain Development
              </Link>
            </li>
            <li>
              <Link href="/components/servicesDetails/DatabaseSecurity" className="hover:underline">
                &raquo; Database Security
              </Link>
            </li>
            <li>
              <Link href="/components/servicesDetails/UIUXDesign" className="hover:underline">
                &raquo; UI/UX Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Head Office:</span>
              <br />
              6740, Mishrifah Dist, 23331
              <br />
              Jeddah, Saudi Arabia.
            </li>
            <li>
              <span className="font-bold">Phone Call:</span>
              <br />
              +966 53 717 7486
            </li>
            <li>
              <span className="font-bold">Opening Hours:</span>
              <br />
              Mon - Sat: 10.00 AM - 4.00 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>
          &copy; All Copyright 2024 by Dexterz Sol.{" "}
          <Link href="#">
            <span className="hover:underline">Terms & Condition</span>
          </Link>{" "}
          |{" "}
          <Link href="#">
            <span className="hover:underline">Privacy Policy</span>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
