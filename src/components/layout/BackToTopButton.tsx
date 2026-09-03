"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 md:left-auto md:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-theme-cream bg-caramel text-theme-cream shadow-lg transition-colors hover:bg-caramel active:scale-95"
        >
          <ArrowUp className="h-5 w-5 text-theme-cream" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}