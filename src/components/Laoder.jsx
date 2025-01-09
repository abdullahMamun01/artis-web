"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    // Trigger full logo animation after initial slide-up
    const timer = setTimeout(() => {
      setShowFull(true);
    }, 1600); // 800ms for longest slide + 800ms buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="flex gap-2">
        <motion.div
          className="w-2.5 h-16 bg-white origin-bottom mr-1 mt-[-1]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: showFull ? 1 : 0,
            scale: showFull ? 1 : 0,
            rotate: 11,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        />
        {/* First set of bars - always vertical */}
        <motion.div
          className="w-2.5 h-16 bg-white"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{
            y: { duration: 0.8 ,delay:0.2, ease: [0.33, 1, 0.68, 1] },
          }}
        />

        <motion.div
          className="w-2.5 h-16 bg-white ml-3 mr-[-9] shadow-inner shadow-white"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.33, 1, 0.68, 1],
          }}
        />
         <motion.div
          className="w-2.5 h-16 bg-white origin-bottom mr-1 mt-[-1] shadow-sm shadow-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: showFull ? 1 : 0,
            scale: showFull ? 1 : 0,
            rotate: 11,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        />
        {/* First set of bars - always vertical */}
        <motion.div
          className="w-2.5 h-16 bg-white shadow-sm shadow-white shadow-top"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{
            y: { duration: 0.8 ,delay:0.2, ease: [0.33, 1, 0.68, 1] },
          }}
        />

        <motion.div
          className="w-2.5 h-16 bg-white shadow-sm shadow-white ml-[-1]"
          initial={{ y: 200 ,opacity:0 ,scale:0 }}
          animate={{ y: 0 ,rotate:11 ,opacity:showFull ? 1 : 0 ,scale:showFull ? 1 : 0}}
          transition={{
            duration: 0.8,
            
            delay: 0.5,
            ease: [0.33, 1, 0.68, 1],
          }}
        />
    

        {/* Second set of bars - slanted pattern */}

   
      </div>
    </div>
  );
}
