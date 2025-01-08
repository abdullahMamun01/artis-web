import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="px-20">
      <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-24 px-20">
        <Image
          src="https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/AW_Team_01-2200x1650.jpg"
          alt="Person working at desk with iMac"
       
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-blue-600/10" />
      </div>
    </div>
  );
}
