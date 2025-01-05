"use client";

import { Menu } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { awards } from "@/constants/awards";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";



export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <header className=" mx-auto px-20 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-black">
          AW
        </a>
        <div className="flex items-center gap-4">
          <button className="rounded-full border-2 border-gray-300 px-4 py-2 text-gray-600 hover:text-gray-900 hover:border-gray-900">
            Get in touch
          </button>
          <button
            className="p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className=" mx-auto px-20 mt-20 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[118px] font-medium tracking-tight mb-20 leading-none text-black">
            Crafting{" "}
            <motion.span
              animate={{
                color: ["#363B97", "#4045B8", "#23.52551"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Digital
            </motion.span>
            <br />
            <span className="mt-7">Experiences</span>
          </h1>
          {/* <button
            className="mt-4 bg-green-300 text-black hover:bg-primary/90 relative overflow-hidden px-10 py-6 rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
    
          >
            <SlideUpFadeText isHovered={isHovered} text="Get in touch" />
          </button> */}
          <div className="grid grid-cols-12 mt-20">
            <div className="flex items-center gap-4 col-span-6">
              <div className="bg-black text-white p-0 rounded-full h-20 w-20 flex items-center justify-center font-medium relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={awards[currentIndex].number}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[24px]"
                  >
                    {awards[currentIndex].number}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="h-[28px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={awards[currentIndex].title}
                    className="text-gray-500  text-[24px] "
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {awards[currentIndex].title}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center justify-between gap-8 col-span-6">
              <p className="text-[23.5px] text-gray-900 max-w-2xl">
                We build engaging websites, brands & innovative e-commerce
                solutions.
              </p>
              <div className="w-3/4">
                <button className="rounded-full text-[23.5px] bg-blue-600 hover:bg-blue-600/90 text-lg w-full px-8 py-5 text-white">
                  Case Studies
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/3 fixed bottom-2 z-50 left-1/3   mx-auto h-8 mt-20 rounded-full bg-gradient-to-r  from-black to-[#4F5CD7]" />
        </div>
      </main>

      {isMenuOpen && (
        <MenuItem isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
    </div>
  );
}


