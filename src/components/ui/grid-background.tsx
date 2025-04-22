
"use client";

import React from "react";
import { motion } from "framer-motion";

export const GridBackgroundDemo = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.5,
      transition: { duration: 0.5 },
    },
  };

  function GridPattern() {
    const dots = [];
    
    // Only execute if we're in a browser environment
    if (typeof window !== 'undefined') {
      const size = Math.min(40, Math.max(20, window.innerWidth / 40)); // Responsive size
      const cols = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const isActive = Math.random() > 0.9; // 10% of dots are active
          
          if (isActive) {
            dots.push(
              <motion.div
                key={`${i}-${j}`}
                className="absolute rounded-full bg-skyBlue/30"
                style={{
                  top: i * size,
                  left: j * size,
                  width: 4,
                  height: 4,
                }}
                variants={dotVariants}
              />
            );
          }
        }
      }
    }
    
    return dots;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {typeof window !== "undefined" && <GridPattern />}
      </motion.div>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepPurple/20 via-deepPurple/40 to-deepPurple/80"></div>
    </div>
  );
};
