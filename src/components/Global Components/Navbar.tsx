"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-bg/80 backdrop-blur-lg border-b border-white/10 shadow-sm flex justify-center">
      {/* Centered container */}
      <div className="w-full md:w-[75%] px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary tracking-wide">
          Lazarev Clone
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-text font-medium">
          <li>
            <a href="/" className="hover:text-primary transition-all duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-primary transition-all duration-200">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-primary transition-all duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-primary transition-all duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text hover:text-primary transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Close Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-bg/95 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4 text-center shadow-md rounded-b-2xl">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="block text-text hover:text-primary transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
