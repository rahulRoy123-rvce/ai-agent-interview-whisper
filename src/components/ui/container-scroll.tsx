"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div
      className="relative h-auto min-h-screen py-8 flex items-start justify-center overflow-visible bg-transparent"
      ref={containerRef}
    >
      <motion.div
        style={{ scale, y }}
        className="relative flex flex-col items-center pt-8 md:pt-12 w-full"
      >
        <div className="text-center mb-10 px-4">{titleComponent}</div>
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const ContainerScrollText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-3xl text-center relative z-10 px-4">
      {children}
    </div>
  );
};

export const ContainerScrollImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative mt-10 p-4 z-10 max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative rounded-xl overflow-hidden shadow-2xl border border-skyBlue/20"
      >
        <img 
          src={src} 
          alt={alt} 
          width={800} 
          height={600} 
          className="w-full h-auto max-h-[500px] object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepPurple/30 to-transparent"></div>
      </motion.div>
    </div>
  );
};
