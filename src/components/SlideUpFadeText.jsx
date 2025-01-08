"use client";
import { motion, AnimatePresence } from "framer-motion";

const SlideUpFadeText = ({ text, isHovered, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={isHovered ? "hover" : "default"}
          initial={{ y: isHovered ? 20 : -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: isHovered ? -20 : 20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="whitespace-nowrap"
        >
          {text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideUpFadeText;
