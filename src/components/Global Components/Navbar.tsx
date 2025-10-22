"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLLIElement[]>([]);
  linksRef.current = [];

  // ✅ Properly typed function
  const addToRefs = (el: HTMLLIElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  // Animate on mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.6,
    })
      .from(logoRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(
        linksRef.current,
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.4"
      );
  }, []);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        gsap.to(navRef.current, {
          height: "4rem", // h-16
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
        });
      } else {
        gsap.to(navRef.current, {
          height: "6rem", // h-24
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(12px)",
          borderBottom: "0px solid rgba(255, 255, 255, 0.1)",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate mobile menu open/close
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 w-full z-50 bg-bg/80 backdrop-blur-lg border-white/10 shadow-sm flex justify-center h-24 transition-all duration-300"
    >
      {/* Centered container */}
      <div className="w-full md:w-[75%] px-6 flex items-center justify-between">
        {/* Logo */}
        <h1
          ref={logoRef}
          className="text-2xl font-bold text-primary tracking-wide"
        >
          Lazarev Clone
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-text font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item} ref={addToRefs}>
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:text-primary transition-all duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text hover:text-primary transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden overflow-hidden transition-all duration-300 ${
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
