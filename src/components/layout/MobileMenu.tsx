"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: {
    name: string;
    href: string;
  }[];
}

export default function MobileMenu({
  open,
  setOpen,
  navItems,
}: Props) {
  const pathname = usePathname();
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const updateTop = () => {
      // Measure both the Topbar and the Header combined height if they are stacked in a common wrapper,
      // or query a wrapper element (e.g. id="site-header-wrapper") that contains both Topbar and Header.
      // Alternatively, we sum up their individual heights:
      const topbar = document.querySelector(".relative.z-50.w-full.border-b"); // or your topbar selector/class
      const header = document.querySelector("header");
      
      const topbarHeight = topbar ? Math.ceil(topbar.getBoundingClientRect().height) : 0;
      const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
      
      setTopOffset(topbarHeight + headerHeight);
    };

    // compute initial top offset and keep updated on resize
    updateTop();
    window.addEventListener("resize", updateTop);
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", updateTop);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 z-50 bg-black/50"
            style={{ top: topOffset, bottom: 0 }}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "80%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 z-[60] w-full max-w-[420px] overflow-y-auto bg-premium-black"
            style={{ top: topOffset, height: `calc(100vh - ${topOffset}px)` }}
          >
            <div className="flex min-h-full flex-col p-7 pt-8">
              <span className="mb-8 text-xs tracking-[4px] text-premium-beige font-sans">
                MENU
              </span>

              <nav className="flex-1">
                {navItems.map((item, index) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between border-b border-white/10 py-6"
                      >
                        <span
                          className={`font-cormorant text-4xl transition group-hover:text-[#c89a4b] ${
                            isActive ? "italic text-premium-beige" : "text-white"
                          }`}
                        >
                          {item.name}
                        </span>

                        <span className="text-sm text-white/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <a
                href="tel:5512067097"
                className="w-fit mx-auto mt-12 inline-flex items-center gap-3 bg-caramel text-white font-sans tracking-wide hover:bg-theme-cream hover:text-premium-black px-6 py-3 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                (551) 206-7097
              </a>

              <p className="mt-8 text-sm leading-7 text-white/40 font-cormorant">
                Premium Tile, Stone & Masonry Installation throughout New Jersey.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}