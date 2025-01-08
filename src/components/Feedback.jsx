'use client'
import { TestimonialCard } from "@/TestimonialCard";
import React, { useRef } from "react";
import { ScrollIndicator } from "./ScrollIndicator";
const testimonials = [
  {
    quote:
      "In the years we’ve worked with Artistsweb, they have consistently been a solid, reliable, dedicated and effective partner. We value greatly their capacity to work quickly and the advice that they give us. Their knowledge and development skillset is unrivalled compared to other digital agencies we’ve worked with and we shall continue to collaborate with them undoubtedly, for many years to come.",
    author: "Steven Glibbery",
    company: "TGA Mobility",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "Artistsweb built our new website and it has been an absolute pleasure working with the whole team. Excellent communication and they built us just an incredible looking website.",
    author: "Nathan Smith",
    company: "Tech SuperPowers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "Artistsweb are a great team of professionals to work with. They listened to our requirements very closely and delivered complex solutions with detail and outstanding creativity and more importantly to deadlines other agencies could not previously meet. We would highly recommend them to any corporation looking for a talented team of digital strategists, designers and developers.",
    author: "David Cortes",
    company: "Costa Coffee",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
  },
];
export default function Feedback() {
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
            testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                image={testimonial.image}
                index={index}
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