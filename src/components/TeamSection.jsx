"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
export default function TeamSection() {
  const welcomeText = "Our team of experts can help you with...";
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 32,
        stiffness: 100,
      },
    },
  };
  const [hoveredService, setHoveredService] = useState(null);
  return (
    <div className="min-h-screen bg-[#111111] px-6 py-20 ">
      <div className="mx-auto w-full px-12">
        <h2 className="mb-4 text-xl text-gray-200"></h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="space-y-4"
        >
          {welcomeText.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={child}
              className="inline-block mr-2 text-[24px]  text-white"
            >
              {word}
            </motion.span>
          ))}

          {[
            "E-commerce",
            "Website Design",
            "Digital Products",
            "Brand Identities",
          ].map((service) => (
            <div
              key={service}
              className="group relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <motion.h1 variants={child} className="text-[54px] font-medium text-white transition-transform duration-500 ease-out hover:translate-x-2 ">
                {service}
              </motion.h1>
              <div
                className={`absolute right-0 top-1/2 flex items-center gap-4 -translate-y-1/2 transition-all duration-300 ${
                  hoveredService === service
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div className="text-right">
                  <p className="text-[16px] text-gray-400">Latest Case Study</p>
                  <h3 className="text-[24px] text-white">Alveena Casa</h3>
                </div>

                <div className="relative h-16 w-16 overflow-hidden rounded-full mx-4">
                  <Image
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    alt="Alveena Casa"
                    width={1000}
                    height={1000}
                    className="object-cover"
                  />
                </div>

                <ArrowRight className="h-10 w-10 text-white" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ebd */}

        <div className="w-full border-b h- border-gray-700 py-10"></div>

        <div className="mt-24">
          {/* Creative Agency section */}
          <h3 className="bg-gradient-to-r from-[#5A62FF] to-[#7F88FF] bg-clip-text text-4xl font-medium text-transparent md:text-5xl lg:text-6xl">
            Creative Agency
          </h3>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xl text-gray-300 text-[24px] leading-[1.5]">
              We&apos;re an award-winning creative agency based in London,
              focused on E-Commerce, Web Design London, Digital Products,
              Branding and SEO.
            </p>

            <div className="flex gap-4">
              <div className="group relative overflow-hidden rounded-full bg-transparen px-10 py-3.5 transition-colors border border-[#545CFF]">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative text-white text-[24px]">
                  300+ Projects
                </span>
              </div>

              <div className="group relative overflow-hidden rounded-full bg-transparen px-10 py-3.5 transition-colors border border-[#545CFF] ">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative text-white text-[24px] ">
                  15 Awards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
