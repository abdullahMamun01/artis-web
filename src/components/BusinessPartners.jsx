"use client";
import Image from "next/image";
import React from "react";
import { BusinessPartnerTitle } from "./BusinessPartnerTitle";
import Logo from "../../public/logo-2.png";
import Logo2 from "../../public/logo-2.png";
import Logo3 from "../../public/logo-3.png";
import Logo4 from "../../public/logo-4.png";
import Logo5 from "../../public/logo-6.png";
import Logo6 from "../../public/logo-7.png";



import {motion, useInView} from 'framer-motion'
const logos = [
  {
    name: "Jaeger-LeCoultre",
    src: Logo4,
  },
  {
    name: "TGA",
    src: Logo2,
  },
  {
    name: "Luxe Collective",
    src: Logo3, 
  },
  {
    name: "Richemont",
    src: Logo5,
  },
  {
    name: "JB Capital Markets",
    src: Logo6,
  }
]


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function BusinessPartners() {
  const text = "From ambitious startups to global companies, we partner with great businesses and industry leaders.";
  const words = text.split(" ");
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className="space-y-8 px-20" ref={ref}>
      <motion.h2 
        className="text-[54px] font-semibold max-w-7xl px-4 flex flex-wrap gap-x-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={textVariants}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>

      
      <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="w-[230px] h-[230px] relative"
              // variants={}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: [-20, 0, 0, 20]
              }}
              transition={{
                duration: 4,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 1,
                delay: (logos.length - index - 1) * 0.2 + 0.5,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </motion.div>
          ))}
        </motion.div>

      <BusinessPartnerTitle />
    </div>
  );
}


