
"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const MotionDiv = motion.div;
export const MotionPath = motion.path;
export const MotionSvg = motion.svg;

export function useScrollTransform(
  scrollYProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: string[] | number[]
) {
  return useTransform(scrollYProgress, inputRange, outputRange as any);
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function useSmoothTransform(
  value: MotionValue<number>,
  damping: number = 50,
  stiffness: number = 400
) {
  return useSpring(value, {
    damping,
    stiffness,
  });
}

export const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  direction = null,
  className = "",
  fullWidth = false,
  ...props
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | null;
  className?: string;
  fullWidth?: boolean;
  [key: string]: any;
}) => {
  let translateX = 0;
  let translateY = 0;

  if (direction === "up") {
    translateY = 20;
  } else if (direction === "down") {
    translateY = -20;
  } else if (direction === "left") {
    translateX = 20;
  } else if (direction === "right") {
    translateX = -20;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: translateX,
        y: translateY,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        delay: delay,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={`${className} ${fullWidth ? "w-full" : ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
