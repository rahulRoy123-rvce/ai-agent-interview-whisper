"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 text-primary hover:text-accent focus:outline-none transition-colors"
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
            className="fixed inset-x-0 top-[70px] z-50 bg-background/95 backdrop-blur-xl border-b border-secondary shadow-xl"
          >
            <div className="flex flex-col p-2 space-y-4">
              <a
                href="#features"
                className="text-primary hover:text-accent py-2 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-primary hover:text-accent py-2 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-primary hover:text-accent py-2 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-primary hover:text-accent py-2 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <hr className="border-secondary/30" />
              <a
                href="#"
                className="text-primary hover:text-accent py-2 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
              <button className="w-full py-2 bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
