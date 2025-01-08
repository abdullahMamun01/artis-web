"use client";
import React from "react";
import { ScrollIndicator } from "./components/ScrollIndicator";

export default function Testimonial() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0A0A0B] p-6 relative">
        <ScrollIndicator/>
      {/* Keep scrolling indicator */}

      {/* Main content container */}
      <div className="max-w-6xl mx-auto pt-20">
        {/* Header section */}
        <h1 className="text-white text-6xl font-bold mb-6">Client Feedback</h1>
        <div>
          <p className="text-white text-2xl mb-16">
            We're collaborators - We build tight-knit partnerships with our
            clients.
          </p>

          <div className="absolute top-8 right-8 flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-lg">Keep scrolling</span>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="bg-[#1A1A2E]/50 rounded-3xl p-12 backdrop-blur-sm mb-8">
          <blockquote className="text-white text-[32px] leading-relaxed mb-12">
            "We have worked with Artistsweb to build a complete new website with
            quite complex connections with our CRM and accounting functions. The
            end product is brilliant, a really first class blend of design and
            functionality and the speed and depth of understanding about our
            business was remarkable. I'd highly recommend them."
          </blockquote>

          {/* Author section */}
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
