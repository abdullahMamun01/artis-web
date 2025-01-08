'use client'
import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  useTransform,
  useSpring,
  motion,
  AnimatePresence
} from "framer-motion"

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null)
  const [pageHeight, setPageHeight] = useState(0)

  const resizePageHeight = useCallback(entries => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const scrollY = useSpring(0, {
    damping: 20,
    mass: 0.27,
    stiffness: 100,
    overshootClamping: true
  })
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])

  return (
    <div ref={scrollRef}>
      <AnimatePresence>
        <motion.div
          key={transform}
          style={{ y: transform }}
          className="will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <div style={{ height: pageHeight }} />
    </div>
  )
}

export default SmoothScroll


