'use client'
import Image from "next/image";
import Link from 'next/link';

const Header = () => {
  return (
    
    <nav className="bg-gray-800 text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      {/* Left Side - Navigation Links */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <span className="hover:text-gray-300 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="hover:text-gray-300 cursor-pointer">Contact</span>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <span className="hover:text-gray-300 cursor-pointer">Log Out</span>
          </Link>
        </li>
      </ul>


      {/* Right Side - Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <span className="hover:text-gray-300 cursor-pointer">Logo</span>
        </Link>
      </div>
    </div>
  </nav>
);
};


export default Header;
