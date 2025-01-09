'use client'
import { TestimonialCard } from "@/TestimonialCard";
import React, { useRef } from "react";
import { ScrollIndicator } from "./ScrollIndicator";

export default function Feedback({feedbacks}) {
    const containerRef = useRef(null);
  return (
    <div className=" bg-gradient-to-l from-[#111111] to-[#111111] py-20 relative over">
      {/* Keep scrolling indicator */}
        
      {/* Main content container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Header section */}
        <ScrollIndicator/>
        <h1 className="text-white text-[54px] font-bold mb-6">
          Client Feedback
        </h1>
        <div className="flex justify-between items-center relative">
          <p className="text-white text-[23px] mb-16 my-auto">
            We're collaborators - We build tight-knit partnerships with our
            clients.
          </p>
          <div className="absolute top-0 right-8 flex items-center gap-4 text-gray-400 ">
            <div className="w-[39px] h-[39px] border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[24px]">Keep scrolling</span>
          </div>
        </div>

        {/* Testimonial card */}
        {
            feedbacks.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.feedback}
                author={testimonial.logoName}
                company={testimonial.company}
                image={testimonial.logo}
                
              />
            ))
        }

        {/* Progress bar */}
        <div className="max-w-md mx-auto">
          <div className="h-1 bg-gray-800 rounded-full">
            <div className="h-1 w-1/2 bg-gradient-to-r from-[#4F5CD7] to-blue-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}


/* 
  <div className="bg-[#1A1A2E]/50 rounded-3xl p-12 backdrop-blur-sm mb-8">
          <blockquote className="text-white text-[30px] leading-relaxed mb-12">
            "We have worked with Artistsweb to build a complete new website with
            quite complex connections with our CRM and accounting functions. The
            end product is brilliant, a really first class blend of design and
            functionality and the speed and depth of understanding about our
            business was remarkable. I'd highly recommend them."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="TGA Mobility logo"
                className="w-12 h-12 rounded-full bg-white"
              />
            </div>
            <div className="flex items-center gap-8">
              <span className="text-gray-400 text-xl">Steven Glibbery</span>
              <span className="text-[#4F5CD7] text-xl">TGA Mobility</span>
            </div>
          </div>
        </div>

*/