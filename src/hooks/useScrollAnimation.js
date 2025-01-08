'use client';
import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

/**
 * Hook to animate an element based on the scroll position.
 * @param {RefObject<HTMLElement>} ref The element to animate.
 * @returns An object with the following properties:
 *  - width: The width of the element as a percentage.
 *  - scale: The scale of the element.
 *  - opacity: The opacity of the element.
 *  - blur: The blur of the element.
 */
export function useScrollAnimation(ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, 
    [0, 0.5], 
    ["60%", "100%"]
  );
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [4, 0]);

  return { width, scale, opacity, blur };
}