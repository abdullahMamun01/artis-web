"use client";
import { motion } from "framer-motion";
import SlideUpFadeText from "./SlideUpFadeText";
import { useState } from "react";

export function WorkIntro() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="absolute left-0 top-5 h-full flex items-center px-20  max-w-[500px] ">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-[55px]"
        >
          Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-[24px] text-gray-700 w-full"
        >
          A selection of our crafted work, built from scratch by our talented
          in-house team.
        </motion.p>

        <div className="w-3/4">
          <button
            className="rounded-full mt-[180px] text-[25px] bg-transparent border border-[#826AE4] text-lg w-full px-8 py-5 text-gray-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <SlideUpFadeText
              text="Case Studies"
              isHovered={isHovered}
              className="text-[25px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
