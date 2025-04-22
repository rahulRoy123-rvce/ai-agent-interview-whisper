
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-50 bg-deepPurple/95 backdrop-blur-xl border-b border-white/10 shadow-xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#features"
                className="text-gray-300 hover:text-skyBlue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-skyBlue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-skyBlue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-skyBlue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <hr className="border-white/10" />
              <a
                href="#"
                className="text-gray-300 hover:text-skyBlue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
              <button className="w-full py-2 bg-skyBlue text-deepPurple font-medium rounded-lg hover:bg-skyBlue/90 transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
