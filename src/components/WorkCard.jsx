"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function WorkCard({ title, image, tags, index, isBtn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-15%" }}
      className="flex-shrink-0 w-[660px] overflow-hidden rounded-3xl bg-white relative"
    >
      <div className="relative h-[540px] ">
        {isBtn && (
          <button className="bg-[#545CFF] px-6 py-2 text-[16px] text-gray-50 rounded-full absolute top-8 right-8 font-semibold">
            Latest
          </button>
        )}
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 py-6 px-9 text-white">
          <h3 className="text-[40px] font-bold mb-4">{title}</h3>

          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-6 py-2 text-[16px] bg-transparent border border-gray-400 backdrop-blur-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
