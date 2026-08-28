"use client";

import { motion } from "framer-motion";

interface HamburgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Hamburger({
  open,
  setOpen,
}: HamburgerProps) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative z-[70] flex h-12 w-12 items-center justify-center text-[#1b1b1b] hover:opacity-80 transition-opacity"
    >
      <div className="relative h-5 w-7">
        {/* Top Line */}
        <motion.span
          initial={false}
          animate={
            open
              ? {
                  rotate: 45,
                  top: "50%",
                  backgroundColor: "#111",
                }
              : {
                  rotate: 0,
                  top: "0%",
                  backgroundColor: "#111",
                }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 h-[1.8px] w-full -translate-y-1/2 rounded-full origin-center"
        />

        {/* Middle Line */}
        <motion.span
          initial={false}
          animate={
            open
              ? {
                  opacity: 0,
                  scaleX: 0,
                }
              : {
                  opacity: 1,
                  scaleX: 1,
                }
          }
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-1/2 h-[1.8px] w-full -translate-y-1/2 rounded-full bg-current origin-center"
        />

        {/* Bottom Line */}
        <motion.span
          initial={false}
          animate={
            open
              ? {
                  rotate: -45,
                  top: "50%",
                  backgroundColor: "#111",
                }
              : {
                  rotate: 0,
                  top: "100%",
                  backgroundColor: "#111",
                }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute left-0 h-[1.8px] w-full -translate-y-1/2 rounded-full origin-center"
        />
      </div>
    </button>
  );
}