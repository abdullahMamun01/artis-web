"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

export default function PartnerSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-white  py-32 ">
      <div className="mx-auto w-full px-20 h-4/5">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column */}
          <div className="space-y-12 col-span-6">
            <div className="space-y-8">
              <motion.h1 
                className="text-[54px] font-semibold tracking-tight text-gray-900"
              >
                {["Your", "Digital", "Partner"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[1.1rem]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      damping: 25,
                      stiffness: 100,
                      delay: i * 0.1 // Stagger each word
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                ref={ref}
                className="max-w-xl font-medium text-[24px] text-[#111111] "
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {["We partner with companies of all sizes to solve complex business challenges",
                  "and define their digital strategies and objectives that deliver results.",
                  "We help bring ideas to life and create brands, websites & digital products that work."].map((line, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: i * 0.12
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            {/* Brands Section */}
            <div className="space-y-3 flex gap-4 pt-20">
              <motion.div 
                className="flex -space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.2
                }}
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 44">
                    <path
                      id="uuid-92a38a53-a3b2-4c78-bf2a-d96e3e6461cc"
                      d="m104.48,33.72c.98-3.96-.23-7.68-3.29-12.26-2.94-4.38-4.19-6.6-4.03-10.05.2-4.58,3.17-8.26,7.67-11.02h-14.25c-5.21,3.8-7.2,9.2-7.16,12.96.04,3.45,1.14,5.98,3.44,9.23,1.88,2.68,3.76,5.04,3.84,8.19.08,4-2.94,7.37-6.89,9.97l12.06,3.26c3.72-2.21,7.59-6.25,8.61-10.28h0Zm8.18-23.2h7.63v26.66h11.16V10.52h7.63V.93h-26.42v9.58Zm-79.82,22.08l-7.63-7.57c-3.29,3.26-8.65,3.22-11.94-.04-3.29-3.26-3.25-8.57.04-11.83,3.29-3.26,8.65-3.22,11.94.04l.04.04,7.63-7.57c-7.48-7.49-19.65-7.57-27.21-.16s-7.63,19.48-.16,26.97,19.65,7.57,27.21.16l.08-.04Zm125.62-9.97l2.74-11.37h.12l2.7,11.37h-5.56ZM168.14.93h-13.43l-11.59,36.24h11.9l1.53-5.9h9.63l1.53,5.9h12.29L168.14.93ZM56.37,27.47c-4.66,0-8.42-3.76-8.42-8.38s3.8-8.34,8.46-8.34,8.42,3.76,8.42,8.34-3.76,8.38-8.42,8.38h-.04ZM56.37.04c-10.61,0-19.22,8.54-19.22,19.09s8.61,19.05,19.26,19.05,19.22-8.54,19.22-19.09S67.02.04,56.37.04h0Z"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </div>
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 44">
                    <path
                      id="uuid-92a38a53-a3b2-4c78-bf2a-d96e3e6461cc"
                      d="m104.48,33.72c.98-3.96-.23-7.68-3.29-12.26-2.94-4.38-4.19-6.6-4.03-10.05.2-4.58,3.17-8.26,7.67-11.02h-14.25c-5.21,3.8-7.2,9.2-7.16,12.96.04,3.45,1.14,5.98,3.44,9.23,1.88,2.68,3.76,5.04,3.84,8.19.08,4-2.94,7.37-6.89,9.97l12.06,3.26c3.72-2.21,7.59-6.25,8.61-10.28h0Zm8.18-23.2h7.63v26.66h11.16V10.52h7.63V.93h-26.42v9.58Zm-79.82,22.08l-7.63-7.57c-3.29,3.26-8.65,3.22-11.94-.04-3.29-3.26-3.25-8.57.04-11.83,3.29-3.26,8.65-3.22,11.94.04l.04.04,7.63-7.57c-7.48-7.49-19.65-7.57-27.21-.16s-7.63,19.48-.16,26.97,19.65,7.57,27.21.16l.08-.04Zm125.62-9.97l2.74-11.37h.12l2.7,11.37h-5.56ZM168.14.93h-13.43l-11.59,36.24h11.9l1.53-5.9h9.63l1.53,5.9h12.29L168.14.93ZM56.37,27.47c-4.66,0-8.42-3.76-8.42-8.38s3.8-8.34,8.46-8.34,8.42,3.76,8.42,8.34-3.76,8.38-8.42,8.38h-.04ZM56.37.04c-10.61,0-19.22,8.54-19.22,19.09s8.61,19.05,19.26,19.05,19.22-8.54,19.22-19.09S67.02.04,56.37.04h0Z"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </div>
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 44">
                    <path
                      id="uuid-92a38a53-a3b2-4c78-bf2a-d96e3e6461cc"
                      d="m104.48,33.72c.98-3.96-.23-7.68-3.29-12.26-2.94-4.38-4.19-6.6-4.03-10.05.2-4.58,3.17-8.26,7.67-11.02h-14.25c-5.21,3.8-7.2,9.2-7.16,12.96.04,3.45,1.14,5.98,3.44,9.23,1.88,2.68,3.76,5.04,3.84,8.19.08,4-2.94,7.37-6.89,9.97l12.06,3.26c3.72-2.21,7.59-6.25,8.61-10.28h0Zm8.18-23.2h7.63v26.66h11.16V10.52h7.63V.93h-26.42v9.58Zm-79.82,22.08l-7.63-7.57c-3.29,3.26-8.65,3.22-11.94-.04-3.29-3.26-3.25-8.57.04-11.83,3.29-3.26,8.65-3.22,11.94.04l.04.04,7.63-7.57c-7.48-7.49-19.65-7.57-27.21-.16s-7.63,19.48-.16,26.97,19.65,7.57,27.21.16l.08-.04Zm125.62-9.97l2.74-11.37h.12l2.7,11.37h-5.56ZM168.14.93h-13.43l-11.59,36.24h11.9l1.53-5.9h9.63l1.53,5.9h12.29L168.14.93ZM56.37,27.47c-4.66,0-8.42-3.76-8.42-8.38s3.8-8.34,8.46-8.34,8.42,3.76,8.42,8.34-3.76,8.38-8.42,8.38h-.04ZM56.37.04c-10.61,0-19.22,8.54-19.22,19.09s8.61,19.05,19.26,19.05,19.22-8.54,19.22-19.09S67.02.04,56.37.04h0Z"
                      strokeWidth="0"
                    ></path>
                  </svg>
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-500 text-[24px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  damping: 25,
                  stiffness: 100,
                  delay: 0.4
                }}
              >
                Brands who&apos;ve trusted us...
              </motion.p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="flex items-end col-span-6 h-full justify-end">
            <motion.div 
              className="w-full rounded-3xl bg-[#ECF1F4] px-[80px] py-20 border-l border-r border-gray-350 origin-top"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                damping: 25,
                stiffness: 100,
              }}
            >
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
                <motion.div 
                  className="text-center pb-8 sm:pb-0 sm:pr-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="text-[54px] font-bold mb-2">20</div>
                  <div className="text-[24px] text-muted-foreground">
                    Years on the market
                  </div>
                </motion.div>
                <motion.div 
                  className="text-center pt-8 sm:pt-0 sm:pl-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="text-[54px] font-bold mb-2">500</div>
                  <div className="text-[24px] text-muted-foreground">
                    Satisfied Customers
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
