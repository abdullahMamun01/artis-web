"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollIndicator({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });
  console.log(scrollYProgress)
  return (
    <motion.div className="sticky right-8 top-1/2 -translate-y-1/4 w-[7px] h-[100px] bg-gray-800/50 rounded-full overflow-hidden ml-[-100px]">
      <motion.div
        className="w-full bg-[#4F5CD7] rounded-full origin-top"
        style={{
          height: "100%",
          scaleY: scaleY,
        }}
      />
    </motion.div>
  );
}
