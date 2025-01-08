'use client'

import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      style={{ transformOrigin: "right" }}
      className={`fixed inset-0 bg-black z-50 ${!isLoading ? 'pointer-events-none' : ''}`}
    />
  )
}

