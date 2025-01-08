"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function BusinessPartnerTitle() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    smooth: true, // Enable smooth scrolling
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["-50%", "0%"]);
  const sommothScroll = useSpring(x, { stiffness: 100, damping: 30 });
  return (
    <section ref={containerRef} className="relative  py-20">
      <div className=" overflow-hidden flex items-center ">
        <motion.div
          ref={cardsContainerRef}
          style={{ x }}
          className="flex gap-8 pl-[35vw] relative pr-20 min-w-max text-[130px] font-bold"
        >
          Elevate your digital presence
        </motion.div>
      </div>
    </section>
  );
}


