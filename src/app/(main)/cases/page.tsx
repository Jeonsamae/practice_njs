"use client";

import { useState } from "react";
import { FaInfoCircle, FaBook, FaStickyNote, FaDownload, FaPrint } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

export default function CaseViewer() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"Info" | "Table of Contents" | "Notes & Highlights" | null>(null);

  // Case content (this will be printed/downloaded)
  const caseContent = `
    LANESTOSA VS. SANTAMARIA
    Ponente: VILLA-REAL, J.
    Decision Date: September 13, 1928

    DECISION:
    This is a Mandamus proceeding instituted by Fausta Lanestosa and Bernabe Lames...
    The lower court ordered the petitioners to appear before it...
  `;

  // Function to handle printing
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow?.document.write(`<pre>${caseContent}</pre>`);
    printWindow?.document.close();
    printWindow?.print();
  };

  // Function to handle downloading the case content as a .txt file
  const handleDownload = () => {
    const blob = new Blob([caseContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "case_content.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-sky-500 text-white p-4 transition-all ${isOpen ? "w-72" : "w-16"}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl mb-4">
          {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
        </button>
        <nav>
          <ul>
            <li className="p-2 cursor-pointer" onClick={() => setActiveTab(activeTab === "Info" ? null : "Info")}>
              <div className="flex items-center gap-2"> <FaInfoCircle /> {isOpen && "Info"} </div>
              {activeTab === "Info" && isOpen && (
                <div className="bg-white text-black p-4 rounded-md mt-2">
                  <h2 className="text-lg font-bold">Title</h2>
                  <p>Lanestosa vs. Santamaria</p>
                  <h2 className="text-lg font-bold mt-2">Case</h2>
                  <p>G.R. No. 30076</p>
                  <h2 className="text-lg font-bold mt-2">Decision Date</h2>
                  <p>September 13, 1928</p>
                  <h2 className="text-lg font-bold mt-2">Ponente</h2>
                  <p>VILLA-REAL, J.</p>
                  <h2 className="text-lg font-bold mt-2">Case Category</h2>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded">Criminal</span>
                  <h2 className="text-lg font-bold mt-2">Tags</h2>
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded mr-2">Not Cited Recently</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded">Criminal</span>
                </div>
              )}
            </li>
            <li className="p-2 cursor-pointer" onClick={() => setActiveTab(activeTab === "Table of Contents" ? null : "Table of Contents")}>
              <div className="flex items-center gap-2"> <FaBook /> {isOpen && "Table of Contents"} </div>
              {activeTab === "Table of Contents" && isOpen && (
                <div className="bg-white text-black p-4 rounded-md mt-2">No content available.</div>
              )}
            </li>
            <li className="p-2 cursor-pointer" onClick={() => setActiveTab(activeTab === "Notes & Highlights" ? null : "Notes & Highlights")}>
              <div className="flex items-center gap-2"> <FaStickyNote /> {isOpen && "Notes & Highlights"} </div>
              {activeTab === "Notes & Highlights" && isOpen && (
                <div className="bg-white text-black p-4 rounded-md mt-2">No content available.</div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">LANESTOSA VS. SANTAMARIA</h1>
          <div className="flex gap-4">
            <button onClick={handleDownload} className="bg-gray-300 p-2 rounded flex items-center gap-2">
              <FaDownload /> Download
            </button>
            <button onClick={handlePrint} className="bg-gray-300 p-2 rounded flex items-center gap-2">
              <FaPrint /> Print
            </button>
            <div className="relative">
              <input type="text" placeholder="Search" className="border p-2 rounded pl-8" />
              <BiSearch className="absolute left-2 top-3 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Case Content */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold">DECISION</h2>
          <p className="mt-4">
            This is a Mandamus proceeding instituted by Fausta Lanestosa and Bernabe Lames...
            The lower court ordered the petitioners to appear before it...
          </p>
        </div>
      </div>
    </div>
  );
}
