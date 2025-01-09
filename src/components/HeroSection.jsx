"use client";

import { Menu } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
// import { awards } from "@/constants/awards";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import SlideUpFadeText from "./SlideUpFadeText";

export default function HeroSection({ heroContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [getInTouchHovered, setGetInTouchHovered] = useState(false);
  const awards = heroContent?.stats?.map((award) => ({
    number: award.count,
    title: award.label,
  })) || [
    {
      number: "20",
      title: "Website Awards",
    },
    {
      number: "15",
      title: "Design Awards",
    },
    {
      number: "25",
      title: "Happy Clients",
    },
    {
      number: "10",
      title: "Industry Awards",
    },
  ];
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        bounce: 0.3,
      },
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const heroTitle = heroContent.title || "Digital Experiences for Your Success";
  return (
    <div className="min-h-screen bg-white">
      <header className=" mx-auto px-20 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-black">
          AW
        </a>

        <div className="flex items-center gap-4">
          <button
            onMouseEnter={() => setGetInTouchHovered(true)}
            onMouseLeave={() => setGetInTouchHovered(false)}
            className="rounded-full border border-[#4a57e2] px-[26px] py-1.5 text-gray-800 hover:text-gray-900 hover:border-gray-900"
          >
            <SlideUpFadeText
              text="Get in touch"
              isHovered={getInTouchHovered}
              className="text-[16px] font-medium"
            />
          </button>
          <button
            className="p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className=" mx-auto px-20 mt-5 pt-20">
        <div className="max-w-7xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-[119px] p-0 font-bold text-black flex flex-wrap gap-8"
          >
            {heroTitle.split(" ").map((word, index) => {
              if (index === 1) {
                return (
                  <motion.span
                    key={index}
                    variants={wordAnimation}
                    animate={{
                      color: [
                        "#363B97", // Deep blue
                        "#4045B8", // Medium blue
                        "#4A57E2", // Bright blue
                        "#6366F1", // Indigo
                        "#4A57E2", // Back to bright blue
                        "#4045B8", // Back to medium blue
                        "#363B97"  // Back to deep blue
                      ],
                    }}
                    transition={{
                      duration: 6, // Increased duration for smoother transition
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className=""
                  >
                    {word}
                  </motion.span>
                );
              } else {
                return (
                  <motion.span className="m-0 p-0" key={index} variants={wordAnimation}>
                    {word}
                  </motion.span>
                );
              }
            })}
          </motion.div>


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
                {heroContent.subtitle}
              </p>
              <div className="w-3/4">
                <button
                  className="rounded-full text-[25px] bg-blue-600 hover:bg-blue-600/90 text-lg w-full px-8 py-5 text-white"
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

          <div className="w-1/3 fixed bottom-2 z-50 left-1/3   mx-auto h-8 mt-20 rounded-full bg-gradient-to-r  from-black to-[#4F5CD7]" />
        </div>
      </main>

      {isMenuOpen && (
        <MenuItem isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}
    </div>
  );
}
