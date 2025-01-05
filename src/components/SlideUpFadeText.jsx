"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SlideUpFadeText = ({ text, className = ""  , isHovered}) => {

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={isHovered ? "hovered" : "hidden"} // Change key to trigger remount on hover
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"

        className="absolute inset-0 flex items-center justify-center"
      >
        Case Studies
      </motion.span>
    </AnimatePresence>
  );
};

export default SlideUpFadeText;
