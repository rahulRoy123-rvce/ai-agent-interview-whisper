import React from "react";
import { FadeIn } from "./motion";
import src3 from "../../../public/IMG_3048[1].png"

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200/50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col items-center justify-center">
            
          
            
            <div className="flex space-x-6 mt-8">
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-skyBlue transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-gradient-to-br from-skyBlue/20 to-boldPurple/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </a>
              
              <a 
                href="#" 
                aria-label="Twitter"
                className="text-gray-500 hover:text-skyBlue transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-gradient-to-br from-skyBlue/20 to-boldPurple/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
              </a>
              
              <a 
                href="#" 
                aria-label="Discord"
                className="text-gray-500 hover:text-skyBlue transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-gradient-to-br from-skyBlue/20 to-boldPurple/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8.5a3 3 0 0 0-2.83-2.83l-.12-.01a3.05 3.05 0 0 0-2.83 2.83"></path>
                    <path d="M10.29 4.72a10 10 0 0 0-8.48 10.07 10 10 0 0 0 8.48 10.07"></path>
                    <path d="M13.71 4.72a10 10 0 0 1 8.48 10.07 10 10 0 0 1-8.48 10.07"></path>
                    <path d="M8.5 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                    <path d="M15.5 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GoBot. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Powered by <a href="#" className="font-medium text-boldPurple hover:text-skyBlue transition-colors">Banyan Intelligence</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
