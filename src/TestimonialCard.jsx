"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
export function TestimonialCard({ quote, author, company, image, index }) {
  const cardRef = useRef(null);
  const { scale, opacity, blur } = useScrollAnimation(cardRef);

  return (
    <div className="flex justify-center w-full  ">
      <motion.div
        ref={cardRef}
        style={{
          scale,
          opacity,
          filter: `blur(${blur}px)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="bg-[#1A1A2E]/50 rounded-[30px] px-14 py-20 backdrop-blur-sm mb-8 border border-gray-700"
      >
        {/* Fixed width content container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
              className="absolute -left-4 -top-4 text-6xl text-blue-500/20"
            >
              "
            </motion.div>
            <p className="text-white text-[31px] leading-relaxed mb-12 pt-14">
             {quote}
            </p>
            <div className="flex items-center gap-4">
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.2 + 0.3,
                }}
                src={image}
                alt={author}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20"
              />
              <div>
                <h4 className="text-white font-medium">{author}</h4>
                <p className="text-gray-400">{company}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
