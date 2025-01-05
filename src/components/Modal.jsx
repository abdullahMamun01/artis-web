'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Modal component that wraps its children in a motion container and handles
 * opening and closing.
 *
 * @param {boolean} isOpen - Whether the modal is currently open
 * @param {() => void} onClose - Function to call when the modal is closed
 * @param {ReactNode} children - The content of the modal
 */

export function Modal({ isOpen, onClose, children }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-1/4 top-10  w-3/5 h-[650px] bg-black rounded-3xl z-50 p-10 overflow-y-hidden scrollbar-hide"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

