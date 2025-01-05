'use client'
import { motion } from 'framer-motion';

export function WorkIntro() {
  return (
    <div className="absolute left-0 top-[-80] h-full flex items-center px-20  max-w-[500px] ">
      <div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-6 text-[55px]"
        >
          Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-[24px] text-gray-600 w-full"
        >
          A selection of our crafted work, built from scratch by our talented in-house team.
        </motion.p>
      </div>
    </div>
  );
}