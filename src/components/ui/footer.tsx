import React from "react";
import { FadeIn } from "./motion";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <img 
                src="/gobot-logo.png" 
                alt="GoBot Logo" 
                className="h-14 w-auto mb-4" 
              />
              <p className="text-gray-600 text-sm mt-4 max-w-xs">
                The AI-powered interview assistant that helps you prepare for your next big opportunity.
              </p>
              <div className="flex space-x-4 mt-6">
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-gray-500 hover:text-skyBlue transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Use Cases", "Testimonials"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-skyBlue text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-skyBlue text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Cookies", "Licenses"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-skyBlue text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GoBot. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {["Terms", "Privacy", "Cookies"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-skyBlue text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
