import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--text-color)] shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 mt-auto">
      {/* Pre-Footer Section */}
      <div className="container mx-auto py-8 grid grid-cols-4 gap-14">
        {/* Left Side - Company Info */}
        <div className="ml-10">
          <h2 className="text-xl font-bold flex items-center">
            Empower<span className="text-orange-500 text-lg">.ph</span>
          </h2>
          <p className="mt-2">
            HVG IT Park <br />
            Mandaue City
            <br />
            Cebu City, Philippines
          </p>
          <p className="mt-2">
            Mobile No. <span className="font-semibold">+639451244898</span>
          </p>
          <p className="mt-1">innodata@gmail.com</p>
          <p className="mt-1">
            Please read our{" "}
            <a href="#" className="font-bold text-blue-600">
              FAQ
            </a>{" "}
            before contacting us.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Center - Links */}
        <div className="ml-25">
          <h3 className="font-semibold text-lg mb-2">Legal Research</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Decisions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Laws
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Taxation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Corporate
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Labor
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-20">
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-600">
                Bar Exams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Reviewers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Legal Aid Offices
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Court Directory
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Legal Dictionary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-20">
          <h3 className="font-semibold text-lg mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Lawyers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Hiring
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Copyright */}
          <p className="ml-10">
            © 2021{" "}
            <span className="font-bold">Innodata Knowledge Services Inc.</span>{" "}
            All Rights Reserved.
          </p>

          {/* Right Side - Links */}
          <div className="flex space-x-6 mr-10">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
