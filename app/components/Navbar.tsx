'use client'
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScrollPosition } from "../custom/useScrollPosition";
import { usePathname } from "next/navigation"; // Correctly import usePathname

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname(); // Get the current pathname

  // Define navigation elements
  const navElements = [
    { title: "Prestation", link: "#Prestation" },
    { title: "Modalités", link: "#Modalités" },
    { title: "Tarifs", link: "#Tarifs" },
    { title: "à Propos", link: "#àPropos" },
  ];

  return (
    <nav className="bg-white mr-10 text-black w-full fixed top-0 left-0 right-0 flex items-center justify-end py-4 font-league-spartan z-40 transition-colors duration-300">
      {/* Logo or brand name can go here */}

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        {navElements.map((nav) => (
          <a
            key={nav.title}
            href={nav.link}
            className="mx-10 mt-2 text-base leading-5 font-normal text-black"
          >
            {nav.title}
          </a>
        ))}
        <button className="mr-10 ml-10 bg-[#030C2B] text-white p-2 rounded-lg">
          me contacter
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden mr-12 z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-[60vw] max-w-xs bg-black h-full z-40 p-8 flex flex-col justify-start items-start md:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navElements.map((nav) => (
          <a
            key={nav.title}
            href={nav.link}
            className="text-white py-4"
          >
            {nav.title}
          </a>
        ))}
        {/* Add other unique menu items for mobile here if needed */}
      </div>
    </nav>
  );
}
