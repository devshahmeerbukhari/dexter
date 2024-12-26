import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link"; // Importing Link for client-side navigation
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0a0a23] to-[#3b5bff] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo/dexterzsol_logo.png"
              alt="Dexterz Sol Logo"
              width={96} // Adjust width as per your requirements
              height={96} // Adjust height as per your requirements
              className="h-24 w-auto object-contain"
            />

            <h1 className="text-2xl font-bold">Dexterz Sol</h1>
          </div>
          <p className="mt-4 text-gray-400">
            Crafting Code, Building Futures. Empowering your digital journey
            with precision and passion.
          </p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded hover:bg-gray-700"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">
                &raquo; About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                &raquo; Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
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
              <a href="#" className="hover:underline">
                &raquo; Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                &raquo; App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                &raquo; Generative AI
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                &raquo; Game Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                &raquo; Blockchain Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                &raquo; Database Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                &raquo; UI/UX Design
              </a>
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
