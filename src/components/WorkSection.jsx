"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { WorkCard } from "./WorkCard";
import { WorkIntro } from "./WorkIntro";

const works = [
  {
    title: "Romans & Partners",
    description: "A modern property portal revolutionizing real estate search",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400",
    tags: ["UI/UX Design", "Property Portal"],
  },
  {
    title: "Alveena Casa",
    description:
      "Luxury furniture e-commerce platform with immersive shopping experience",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2400",
    tags: ["UI/UX Design", "E-Commerce"],
  },
  {
    title: "Artify",
    description: "Digital art marketplace connecting artists with collectors",
    image:
      "https://images.unsplash.com/photo-1561735445-df7e2f9c1c64?auto=format&fit=crop&q=80&w=2400",
    tags: ["Marketplace", "Web3"],
  },
];

export function WorkSection() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const { scrollYProgress ,scrollXProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    smooth: true, // Enable smooth scrolling
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-53%"]);
  const sommothScroll = useSpring(x, { stiffness: 100, damping: 30 });
  return (
    <section ref={containerRef} className="relative h-[300vh] py-10">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center ">
        <motion.div
          ref={cardsContainerRef}
          style={{ x }}
          className="flex gap-8 pl-[35vw] relative pr-20 min-w-max"
        >
          <WorkIntro />
          {works.map((work, index) => (
            <WorkCard key={work.title} {...work} index={index} />
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

