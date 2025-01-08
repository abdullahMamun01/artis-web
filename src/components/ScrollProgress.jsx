'use client';

import { useScroll, useSpring ,motion, SpringOptions } from 'framer-motion';


import { RefObject } from 'react';



const DEFAULT_SPRING_OPTIONS = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};
/**
 * @typedef {Object} ScrollProgressProps
 * @property {string} [className] - The class name for the progress bar.
 * @property {SpringOptions} [springOptions] - The spring options for the animation.
 * @property {RefObject<HTMLDivElement>} containerRef - The container element to watch the scroll position for.
 */

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: containerRef?.current !== null,
  });

  const scaleX = useSpring(scrollYProgress, {
    ...(springOptions ?? DEFAULT_SPRING_OPTIONS),
  });

  return (
    <motion.div
      className={className ? `${className} inset-x-0 top-0 h-1 origin-left` : 'inset-x-0 top-0 h-1 origin-left'}
      style={{
        scaleX,
      }}
    />
  );
}
