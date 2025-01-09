'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import SlideUpFadeText from "./SlideUpFadeText";

const ServicesSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="grid grid-cols-12 md:flex-row items-start justify-between px-6 md:px-12 lg:px-24 py-20 bg-white">
      {/* Left Section */}
      <div className="mb-8 md:mb-0 col-span-5">
        <h2 className="text-[54px] font-bold mb-4 flex flex-wrap gap-x-4">
          {["We're", "good", "at"].map((word, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.h6
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px] text-gray-600 font-md mb-4"
        >
          Services
        </motion.h6>
        <ul className="space-y-3 text-lg leading-[3rem]">
          {[
            "E-Commerce",
            "Website Design",
            "Web Development",
            "Digital Products",
            "Brand Identities",
            "SEO Optimisation",
          ].map((service, index) => (
            <motion.li
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="font-semibold text-gray-800 text-[31px]"
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <motion.div 
        className="mt-auto col-span-7 bg-[#545CFF] text-white p-6 md:p-12 rounded-[30px] origin-top overflow-hidden"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <motion.p 
            className="text-[40px] font-semibold mb-6"
          >
            Let's start with a conversation about how we can help you! Get in
            touch, we're a nice bunch.
          </motion.p>
          <motion.div 
            className="flex items-center space-x-4"
          >
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-white text-gray-800 font-lg py-4 text-[24px] rounded-full px-12 shadow-lg hover:bg-gray-100"
            >
              <SlideUpFadeText isHovered={isHovered} text="Let's Talk" />
            </button>
            <a
              href="tel:02071128285"
              className="bg-transparent border border-gray-400 text-white font-bold py-4 text-[24px] rounded-full px-12 shadow-lg"
            >
              0207 112 82 85
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-black via-blue-500 to-purple-600 mt-8"></div> */}
    </div>
  );
};

export default ServicesSection;
