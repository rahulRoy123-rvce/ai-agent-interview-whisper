
"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

export const AnimatedText = ({
  text,
  className,
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <span className={className}>
      <motion.span
        ref={ref}
        aria-hidden="true"
        initial="hidden"
        animate={controls}
        variants={wordAnimation}
        transition={{
          delayChildren: 0.1,
          staggerChildren: 0.04,
        }}
        className="inline-block"
        style={{ position: "relative" }}
      >
        {text.split(" ").map((word, index) => {
          return (
            <span key={index} className="inline-block">
              {word.split("").map((char, charIndex) => {
                return (
                  <motion.span
                    key={charIndex}
                    variants={characterAnimation}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
              {index !== text.split(" ").length - 1 && (
                <motion.span variants={characterAnimation} className="inline-block">
                  &nbsp;
                </motion.span>
              )}
            </span>
          );
        })}
      </motion.span>
    </span>
  );
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
};

export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const getVariants = () => {
    const variants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    };

    switch (direction) {
      case "up":
        variants.hidden = { ...variants.hidden, y: 40 };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case "down":
        variants.hidden = { ...variants.hidden, y: -40 };
        variants.visible = { ...variants.visible, y: 0 };
        break;
      case "left":
        variants.hidden = { ...variants.hidden, x: 40 };
        variants.visible = { ...variants.visible, x: 0 };
        break;
      case "right":
        variants.hidden = { ...variants.hidden, x: -40 };
        variants.visible = { ...variants.visible, x: 0 };
        break;
    }

    return variants;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
      style={{ position: "relative", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};
