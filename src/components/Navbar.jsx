import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/ALL Logos.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // ✅ Nav Links
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {/* Overlay Blur when menu is open */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 transition-opacity duration-300"></div>
      )}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md border-b border-white/20 shadow-md"
            : "backdrop-blur-0 border-b border-transparent shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          {/* Desktop Navbar */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Left: Logo */}
            <div className="bg-gray-900 px-2 rounded-full shadow flex items-center">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/src/assets/ALL Logos.png"
                  alt="Logo"
                  className="object-contain rounded-full hover:cursor-pointer"
                />
              </div>
            </div>

            {/* Center: "TextNext" */}
            <div className="flex-1 flex justify-center">
              <span className="text-2xl text-white font-semibold">
                <span className="text-indigo-400">Text</span>
                <span className="text-green-400">Next</span>
              </span>
            </div>

            {/* Right: Links */}
            <div className="bg-gray-900 px-6 py-2 rounded-full shadow space-x-6 items-center flex">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-bounce"></span>
              {links.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`${
                    location.pathname === item.to
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-indigo-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="flex md:hidden justify-between items-center w-full">
            {/* Left: Logo */}
            <div className="bg-gray-900 px-2 py-1 rounded-full shadow flex items-center">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={LogoImg}
                  alt="Logo"
                  className="object-contain rounded-full hover:cursor-pointer"
                />
              </div>
            </div>

            {/* Center: "TextNext" */}
            <div className="flex-1 flex justify-center">
              <span className="text-2xl text-white font-semibold">
                TextNext
              </span>
            </div>

            {/* Right: Hamburger */}
            <div className="bg-gray-900 w-12 h-12 rounded-full shadow z-50 flex items-center justify-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex items-center justify-center"
              >
                {menuOpen ? (
                  <FiX className="text-gray-200 w-6 h-6" />
                ) : (
                  <FiMenu className="text-gray-200 w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-4 mt-3 w-44 bg-gray-900/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl space-y-2 z-50 transition-all duration-300 animate-fadeSlide border border-white/20"
          >
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === item.to
                    ? "text-indigo-400 bg-indigo-900/30"
                    : "text-gray-300 dark:text-gray-200 hover:text-indigo-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
