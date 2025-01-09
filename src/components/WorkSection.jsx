"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { WorkCard } from "./WorkCard";
import { WorkIntro } from "./WorkIntro";

export function WorkSection({works}) {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const { scrollYProgress ,scrollXProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    smooth: true, // Enable smooth scrolling
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-67%"]);
  const sommothScroll = useSpring(x, { stiffness: 100, damping: 30 });
  return (
    <section ref={containerRef} className="relative h-[300vh] py-10">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center ">
        <motion.div
          ref={cardsContainerRef}
          style={{ x }}
          className="flex gap-8 pl-[39vw] relative pr-20 min-w-max"
        >
          <WorkIntro />
          {works.map((work, index) => (
            <WorkCard key={work.title} isBtn={index === 0} {...work} index={index} />
          ))}
          <div className="flex flex-col px-0 items-center justify-center w-[650px] overflow-hidden rounded-3xl bg-white">
            <h1 className="text-[54px] leading-none mb-7 font-bold">View More</h1>
            <button className="text-[24px]  bg-transparent border border-[#826AE4]  px-10 py-4 rounded-full text-gray-700 ml-4">
              Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

