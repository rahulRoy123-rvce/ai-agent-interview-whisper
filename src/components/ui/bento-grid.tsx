"use client";

import React from "react";
import { FadeIn } from "./motion";
import { motion } from "framer-motion";

interface BentoGridItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  bgClass?: string;
  delay?: number;
}

export const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  bgClass = "bg-white",
  delay = 0,
}: BentoGridItemProps) => {
  // Determine if using a gradient background
  const isGradient = bgClass.includes('gradient');
  
  return (
    <FadeIn delay={delay} className={className}>
      <motion.div 
        className={`${bgClass} row-span-1 rounded-xl border border-gray-200 p-6 group transition-all hover:shadow-xl hover:border-skyBlue/30 h-full shadow-md`}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            {icon && (
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${isGradient ? 'bg-white/20' : 'bg-gray-100'} ${isGradient ? 'text-white' : 'text-skyBlue'}`}>
                {icon}
              </div>
            )}
            <h3 className={`mt-4 text-xl font-semibold ${isGradient ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
            <p className={`mt-2 text-sm ${isGradient ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
};

export const BentoGrid = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">{title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our AI interview system offers a range of powerful features to help you prepare for your next interview.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};
