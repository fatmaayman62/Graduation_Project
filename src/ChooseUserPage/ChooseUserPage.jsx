import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { UserContextMain } from './UserContext';

export default function ChooseUserPage() {
  const { mode, changeMode } = useContext(UserContextMain);

  // ⚡ Dark / Light class toggle for Tailwind
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-x-hidden">

      {/* ===== Navbar ===== */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 gap-4 sm:gap-0">
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            MediLink
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#features" className="relative group transition">
              Features
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative group transition">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <Link to="/login" className="relative group transition">
              Login
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => changeMode(mode === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-gray-200 dark:bg-gray-800 
                         hover:scale-110 transition-all duration-300 
                         shadow-md hover:shadow-blue-500/40"
            >
              {mode === "dark" ? (
                <span className="text-yellow-400">🌞</span>
              ) : (
                <span className="text-gray-800 dark:text-gray-200">🌙</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8
                          bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500">
        
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
        >
          Smarter Access <br />
          <span className="text-blue-500 dark:text-blue-400">To Medication</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="max-w-xl sm:max-w-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg"
        >
          A smart healthcare platform connecting patients and pharmacies
          to provide instant medicine availability, accurate prescription
          reading, and intelligent inventory management.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center"
        >
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 
                       px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-white 
                       hover:bg-blue-500 dark:hover:bg-blue-600 transition shadow-lg shadow-blue-600/40 dark:shadow-blue-500/40"
            onClick={() => localStorage.setItem("userConfigeration", '/user')}
          >
            <FaUser />
            Continue as Patient
          </Link>

          <Link
            to="/register"
            className="flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-500 
                       px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-white 
                       hover:bg-emerald-500 dark:hover:bg-emerald-600 transition shadow-lg shadow-emerald-600/40 dark:shadow-emerald-500/40"
            onClick={() => localStorage.setItem("userConfigeration", '/pharmacy')}
          >
            Join as Pharmacy
          </Link>
        </motion.div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6 lg:px-8 
                          bg-gradient-to-r from-blue-100/40 to-emerald-100/40 
                          dark:from-blue-900/40 dark:to-emerald-900/40 transition-colors duration-500">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100"
        >
          Ready to Transform Healthcare?
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap justify-center"
        >
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 
                       px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-white 
                       hover:bg-blue-500 dark:hover:bg-blue-600 transition shadow-lg shadow-blue-600/40 dark:shadow-blue-500/40"
            onClick={() => localStorage.setItem("userConfigeration", '/user')}
          >
            <FaUser />
            Continue as Patient
          </Link>

          <Link
            to="/register"
            className="flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-500 
                       px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-medium text-white 
                       hover:bg-emerald-500 dark:hover:bg-emerald-600 transition shadow-lg shadow-emerald-600/40 dark:shadow-emerald-500/40"
            onClick={() => localStorage.setItem("userConfigeration", '/pharmacy')}
          >
            Join as Pharmacy
          </Link>
        </motion.div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-gray-300 dark:border-gray-700 py-6 text-center 
                        text-gray-700 dark:text-gray-300 text-sm transition-colors duration-500">
        © 2026 MediLink. All rights reserved.
      </footer>
    </div>
  );
}