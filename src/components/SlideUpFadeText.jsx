"use client";
import { motion } from "framer-motion";

const SlideUpFadeText = ({ text, isHovered, className }) => {
  const springConfig = {
    type: "spring",
    bounce: 0.4,
    stiffness: 150,
    damping: 12,
    duration: isHovered ? 0.6 : 0,
    mass: 0.8
  };

  return (
    <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <motion.div
        animate={{
          y: isHovered ? "-100%" : 0,
          transition: springConfig
        }}
        className="whitespace-nowrap text-center"
      >
        {text}
      </motion.div>
      <motion.div
        animate={{
          y: isHovered ? 0 : "100%",
          transition: springConfig
        }}
        className="whitespace-nowrap absolute text-center w-full"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default SlideUpFadeText;
