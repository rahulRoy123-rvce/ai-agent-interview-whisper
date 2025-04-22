
"use client";

import React from "react";
import { FadeIn, AnimatedText } from "./motion";

export const HeroSection = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  return (
    <div className="relative w-full py-20 md:py-40 overflow-hidden bg-gradient-to-b from-deepPurple/20 to-transparent">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content: Text */}
          <div className="space-y-8">
            <FadeIn delay={0.1} direction="up">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                <span className="text-skyBlue">AI-Powered</span> Interview Agent
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-gray-300">
                Our cutting-edge AI helps candidates prepare for interviews with realistic scenarios and personalized feedback.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-skyBlue text-deepPurple font-medium rounded-lg hover:bg-skyBlue/90 transition-all">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-transparent border border-skyBlue text-skyBlue font-medium rounded-lg hover:bg-skyBlue/10 transition-all">
                  Watch Demo
                </button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-deepPurple bg-gradient-to-br from-skyBlue to-boldPurple"
                    />
                  ))}
                </div>
                <p>Join 10,000+ users preparing for interviews</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Right content: Visual */}
          <FadeIn delay={0.5} direction="left">
            <div className="relative h-[400px] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-skyBlue via-boldPurple to-softYellow opacity-20 blur-3xl rounded-full animate-pulse-slow"></div>
              <div className="relative z-10 h-full w-full bg-deepPurple/30 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl p-6 flex flex-col">
                <div className="flex justify-between items-center">
                  <img 
                    src="/IMG_3048[1].png" 
                    alt="GoBot Logo" 
                    className="h-12 w-auto"
                  />
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-coralRed"></div>
                    <div className="h-3 w-3 rounded-full bg-softYellow"></div>
                    <div className="h-3 w-3 rounded-full bg-mintGreen"></div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-4 flex-1 overflow-y-auto">
                  <div className="bg-deepPurple/70 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                    <p className="text-white">Tell me about a project you worked on.</p>
                  </div>
                  
                  <div className="bg-skyBlue/20 p-3 rounded-lg rounded-br-none ml-auto max-w-[80%]">
                    <p className="text-white">In my previous role, I led a team that designed the database architecture...</p>
                  </div>
                  
                  <div className="bg-deepPurple/70 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                    <p className="text-white">How did you handle the challenges that arose?</p>
                  </div>
                </div>
                
                {/* Chat input container with fixed width */}
                <div className="mt-4 w-full self-end">
                  <div className="relative w-full">
                    <input 
                      type="text" 
                      placeholder="Type your response..." 
                      className="w-full bg-deepPurple/50 border border-white/10 rounded-lg py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-skyBlue pr-10"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-skyBlue rounded-md">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-deepPurple"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
