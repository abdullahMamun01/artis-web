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



import {motion} from 'framer-motion'
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
const logoVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2
    }
  }
}

export default function BusinessPartners() {
  return (
    <div className="space-y-8 px-20">
      <h2 className="text-[54px] font-semibold max-w-7xl px-4">
        From ambitious startups to global companies, we partner with great
        businesses and <br /> industry leaders.
      </h2>

      
      <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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


/* 

     animate={{ 
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20]
              }}
              transition={{
                duration: 4,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 1,
                delay: index * 0.2+0.5,
              }}

*/