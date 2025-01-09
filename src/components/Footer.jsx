"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SlideUpFadeText from "./SlideUpFadeText";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className="bg-background">
      <div className="w-full mx-auto px-4 py-24 sm:px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="space-y-12 col-span-7">
            <h2 className="text-[38px] max-w-xl text-gray-800 font-semibold ">
              We love crafting unforgettable digital experiences, brands and
              websites with people like you.
            </h2>

            <div className="space-y-6">
              <div className="space-y-1">
                <div className="text-md mb-4 font-medium">Get in touch</div>
                <p className="text-[23px] font-semibold text-gray-800">
                  +44 207 112 82 85
                </p>
                <p className="text-[23px] font-semibold text-gray-800">
                  contact@artistsweb.com
                </p>
              </div>
              <p className="text-[23px] font-semibold text-gray-800">
                Artistsweb, 18 Soho Square, London, W1D 3QL, United Kingdom
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 col-span-5 px-10">
            <div className="bg-black text-white px-10 py-6 rounded-[30px] inline-flex justify-between items-center gap-6 w-full">
              <span className="text-[20px] font-medium">Follow us</span>
              <div className="flex items-center gap-6">
                <Instagram className="h-[26px] w-[26px]" />
                <Facebook className="h-[26px] w-[26px]" />
                <Twitter className="h-[26px] w-[26px]" />
                <span className="font-semibold">W.</span>
              </div>
            </div>

            <div className="bg-[#ECF1F4] rounded-3xl p-8 space-y-4 px-12 py-10 overflow-hidden">
              <h3 className="text-[39px] font-[500] text-center">
                Let&apos;s get started
              </h3>
              <p className=" text-center pb-7">
                We&apos;d love to hear about your project.
              </p>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full text-[54px]  bg-[#6366F1] hover:bg-[#5558DA] text-white py-5 text-lg rounded-full"
              >
                <SlideUpFadeText isHovered={isHovered} text="Get in touch" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-24 pt-6 border-t">
          <p className="text-sm text-muted-foreground">
            © 2025 Artistweb Ltd • All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
