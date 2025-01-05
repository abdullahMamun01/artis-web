"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Modal } from "./Modal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/**
 * @typedef {Object} NavigationMenuProps
 * @property {boolean} isOpen - Whether the modal is open
 * @property {() => void} onClose - Function to call when the modal is closed
 */

export default function MenuItem({ isOpen, onClose }) {
  const menuItems = [
    { title: "Case Studies", number: "13" },
    { title: "Our Agency" },
    { title: "Contact Us" },
    { title: "News" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Awwwards", href: "#" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="pt-8">
        <div className="text-white h-[80vh] overflow-y-auto scrollbar-hide px-14">
          <div className="sticky top-0 pt-2 pb-8 bg-black z-10 flex justify-between">
            <h2 className="text-2xl">Navigation</h2>
            <X
              className="text-white cursor-pointer bg-gray-800 w-9 h-9 rounded-full flex items-center justify-center text-7xl p-2" 
              onClick={onClose}
            />
          </div>
          <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8 pb-20"
          >
            {menuItems.map((menuItem) => (
              <motion.a
                key={menuItem.title}
                href="#"
                variants={item}
                className="flex items-center justify-between text-[54px] leading-none font-medium hover:text-indigo-400 transition-colors"
              >
                <span>{menuItem.title}</span>
                {menuItem.count && (
                  <span className="ml-4 text-2xl text-indigo-400">
                    {menuItem.count}
                  </span>
                )}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-auto pt-8 pb-8"
          >
            <p className="text-gray-500 mb-4">Follow us</p>
            <div className="mb-8 flex justify-between">
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="rounded-full bg-[#4F5CD7] hover:bg-[#4F5CD7]/90 text-white text-lg px-8 py-4"
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </Modal>
  );
}

/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-auto pt-8"
        >
          <p className="text-gray-500 mb-4">Follow us</p>
          <div className="mb-8 flex justify-between">
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="rounded-full bg-[#4F5CD7] hover:bg-[#4F5CD7]/90 text-white text-lg px-8 py-4"
            >
              Get in touch
            </motion.button>
          </div>
        </motion.div> */
