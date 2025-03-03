'use client'

import React from "react";
import Image from "next/image";
import { FaInfoCircle, FaNewspaper, FaBalanceScale, FaGavel, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cards = [
  {
    icon: <FaInfoCircle size={60} className="text-black-600" />,
    title: "About Us",
    description: "A brief overview of the SC, its history, and its magistrates who walk through its august halls.",
  },
  {
    icon: <FaNewspaper size={60} className="text-black-600" />,
    title: "News & Announcements",
    description: "Links to the latest SC news and Announcements.",
  },
  {
    icon: <FaBalanceScale size={60} className="text-black-600" />,
    title: "Decisions and Resolutions",
    description: "SC decisions and resolutions uploaded within the last 12 months with a link to the E-Library for older cases.",
  },
  {
    icon: <FaGavel size={60} className="text-black-600" />,
    title: "Bar Matters",
    description: "Official Bar-related news and updates.",
  },
  {
    icon: <FaMapMarkerAlt size={60} className="text-black-600" />,
    title: "Trial Court Locator",
    description: "Contact details of Trial Courts and Offices.",
  },
  {
    icon: <FaFileAlt size={60} className="text-black-600" />,
    title: "Filing",
    description: "Requirements in filing civil and criminal cases.",
  },
];

const Page = () => {
  return (
    <div className="relative w-full min-h-screen pt-0 px-6">
      {/* Background Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/images/bg.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />

        {/* Animated Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold transition-all duration-500">
            Welcome to Empower Law PH
          </h1>
          <p className="mt-4 text-lg md:text-xl transition-all duration-500">
            Your go-to platform for legal research and insights.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Card Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[var(--bg-color)] text-[var(--text-color)] rounded-xl shadow-lg p-6 text-center transition hover:shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center mb-4 text-5xl">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2">{card.description}</p>
            <button className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
              LEARN MORE →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
