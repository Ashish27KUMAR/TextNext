import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import `Link` and `useLocation`

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation(); // Get the current location (URL)

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="w-full border-t border-white/10 bg-gray-900/10 backdrop-blur-md py-6 px-4 md:px-10 text-center text-sm text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        {/* Copyright Text */}
        <p className="text-center md:text-left">
          &copy; {year} <span className="text-indigo-400">Text</span>
          <span className="text-green-400">Next</span>. All rights reserved.
        </p>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
          <Link
            to="/"
            className={`hover:text-indigo-500 transition-colors duration-300 ${
              isActive("/") ? "text-indigo-500 font-semibold" : "text-white"
            }`}
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-indigo-500 transition-colors duration-300 ${
              isActive("/about")
                ? "text-indigo-500 font-semibold"
                : "text-white"
            }`}
            aria-label="About"
          >
            About
          </Link>
          <a
            href="https://github.com/Ashish27KUMAR/TextNext"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-indigo-500 transition-colors duration-300 ${
              isActive("https://github.com/Ashish27KUMAR")
                ? "text-indigo-500 font-semibold"
                : "text-white"
            }`}
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
