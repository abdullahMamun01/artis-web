"use client";
import React, { useState } from "react";
import SlideUpFadeText from "./SlideUpFadeText";

export default function NavItem({ text }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SlideUpFadeText isHovered={isHovered} text={text} className="text-[54px]" />
    </span>
  );
}
