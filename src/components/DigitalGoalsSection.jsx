'use client'
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const DigitalGoalsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headingText = "Let our experienced team elevate your digital goals";
  const words = headingText.split(" ");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const paragraphText = [
    "We have successfully completed over 300+ ",
    "projects from a variety of industries. In our team,",
    "designers work alongside developers and digital,",
    "strategists we believe this is our winning recipe for",
    "creating digital products that make an impact."
  ];

  React.useEffect(() => {
    const controls = animate(count, 250, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, []);

  return (
    <section className="bg-white py-16 px-6">
      <div className="w-full px-20 mx-auto grid grid-cols-12  gap-1 items-center">
        {/* Left Section: Heading and Stats */}
        <div className="col-span-7">
          {/* Updated heading with animation */}
          <motion.h2 
            className="text-[54px] font-bold mb-12 pb-12 max-w-7xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Stats */}
          <div className="flex  gap-16">
            <div>
              <motion.p className="text-[54px] font-bold mb-2">
                {rounded}
              </motion.p>
              <p className="text-gray-700 text-[24px]">Five-Star Reviews</p>
            </div>
            <div>
              <p className="text-[54px] font-bold mb-2">10</p>
              <p className="text-gray-700 text-[24px]">In-House Experts</p>
            </div>
          </div>
        </div>

        {/* Right Section: Description */}
        <div className="col-span-5 flex items-end justify-end mt-auto">
          <motion.div 
            className="text-gray-800 text-[24px] "
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {paragraphText.map((line, index) => (
              <motion.div
                key={index}
                variants={lineVariants}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGoalsSection;
