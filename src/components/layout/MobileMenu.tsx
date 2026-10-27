"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
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
  serviceTypes: {
    name: string;
    path: string;
  }[];
}

export default function MobileMenu({
  open,
  setOpen,
  navItems,
  serviceTypes,
}: Props) {
  const pathname = usePathname();
  const [topOffset, setTopOffset] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const updateTop = () => {
      const header = document.querySelector("header");

      setTopOffset(header ? Math.ceil(header.getBoundingClientRect().bottom) : 0);
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

  useEffect(() => {
    if (!open) setServicesOpen(false);
  }, [open]);

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
                  const isServices = item.name === "Services";
                  const isActive = item.href === "/"
                    ? pathname === "/"
                    : isServices
                      ? pathname.startsWith(item.href)
                      : pathname === item.href;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      {isServices ? (
                        <>
                          <div className="flex items-center justify-between border-b border-white/10">
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="group flex flex-1 items-center justify-between py-6"
                            >
                              <span
                                className={`font-cormorant text-4xl transition group-hover:text-[#c89a4b] ${
                                  isActive ? "italic text-premium-beige" : "text-white"
                                }`}
                              >
                                {item.name}
                              </span>

                              <span className="mr-5 text-sm text-white/30">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </Link>
                            <button
                              type="button"
                              aria-label={`${servicesOpen ? "Hide" : "Show"} service links`}
                              aria-expanded={servicesOpen}
                              aria-controls="mobile-services-dropdown"
                              onClick={() => setServicesOpen((current) => !current)}
                              className="p-4 text-white/70 transition-colors hover:text-[#c89a4b]"
                            >
                              <ChevronDown
                                aria-hidden="true"
                                className={`h-5 w-5 transition-transform duration-200 ${
                                  servicesOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>
                          <AnimatePresence initial={false}>
                            {servicesOpen && (
                              <motion.div
                                id="mobile-services-dropdown"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden border-b border-white/10"
                              >
                                <div className="flex flex-col py-2 pl-5">
                                  {serviceTypes.map((service, serviceIndex) => (
                                    <Link
                                      key={service.path}
                                      href={`/services/${service.path}/wayne-county-nj`}
                                      onClick={() => setOpen(false)}
                                      className={`flex items-center justify-between py-3 font-cormorant text-2xl transition-colors hover:text-[#c89a4b] ${
                                        pathname.startsWith(`/services/${service.path}/`)
                                          ? "text-premium-beige"
                                          : "text-white/80"
                                      }`}
                                    >
                                      {service.name}
                                      <span className="text-xs text-white/30">
                                        0{serviceIndex + 1}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
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
                      )}
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