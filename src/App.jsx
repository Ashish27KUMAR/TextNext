import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Starfield from "./components/Starfield";
import Translator from "./components/Translator";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  // Set the dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Page transition variants with ease-in-out
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-black text-white transition-colors duration-500 ease-in-out">
      {/* Background */}
      <Starfield theme="dark" />

      {/* Navbar */}
      <Navbar />

      {/* Page Content with Animation */}
      <main className="relative w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full flex justify-center"
                >
                  <Translator />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full flex justify-center"
                >
                  <About />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AppWrapper;
