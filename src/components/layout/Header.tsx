"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact"},
];

const serviceTypes = [
  { name: "Tiles", path: "tiles" },
  { name: "Stone", path: "stones" },
  { name: "Masonry", path: "masonry" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setOpen(false);
    }

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 w-full transition-all duration-500
          ${scrolled
            ? "bg-[color:var(--theme-cream)] backdrop-blur-md shadow-sm py-4"
            : "bg-[color:var(--theme-cream)] py-5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="relative w-[200px] h-[78px] lg:w-[300px] lg:h-[80px]">
              <Image
                src="/logo.png"
                alt="Metro Tiles & Stones"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-12 font-sans text-[13px] uppercase tracking-[2px]">
              {navItems.map((item) => {
                const isServices = item.name === "Services";
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : isServices
                    ? pathname.startsWith(item.href)
                    : pathname === item.href;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => isServices && setServicesOpen(true)}
                    onMouseLeave={() => isServices && setServicesOpen(false)}
                    onFocus={() => isServices && setServicesOpen(true)}
                    onBlur={(event) => {
                      if (
                        isServices &&
                        !event.currentTarget.contains(event.relatedTarget as Node | null)
                      ) {
                        setServicesOpen(false);
                      }
                    }}
                    onKeyDown={(event) => {
                      if (isServices && event.key === "Escape") {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={isServices ? servicesOpen : undefined}
                      aria-controls={isServices ? "header-services-dropdown" : undefined}
                      className={`inline-flex items-center gap-1 pb-1 transition-colors duration-200 ${isActive ? "text-premium-beige" : "text-[#333] hover:text-premium-beige"}`}
                    >
                      {item.name}
                      {isServices && (
                        <Icons.ChevronDown
                          aria-hidden="true"
                          className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {isActive && (
                      <motion.div
                        className="absolute -bottom-[2px] left-0 h-[0.5px] bg-premium-beige"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      />
                    )}

                    {isServices && (
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            id="header-services-dropdown"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-1/2 top-full z-[60] w-[min(280px,calc(100vw-2rem))] -translate-x-1/2 bg-[color:var(--theme-cream)] p-4 shadow-xl"
                          >
                            <p className="mb-3 px-3 text-[10px] tracking-[0.25em] text-neutral-500">
                              EXPLORE OUR SERVICES
                            </p>
                            <div className="flex flex-col gap-2">
                              {serviceTypes.map((service, index) => (
                                <Link
                                  key={service.path}
                                  href={`/services/${service.path}/wayne-county-nj`}
                                  onClick={() => setServicesOpen(false)}
                                  className={`flex items-center justify-between border border-[#29251f]/70 px-3 py-2.5 font-cormorant text-xl normal-case tracking-normal transition-colors hover:bg-[#29251f] hover:text-[color:var(--theme-cream)] ${pathname.startsWith(`/services/${service.path}/`) ? "bg-[#29251f] text-[color:var(--theme-cream)]" : "text-[#1b1b1b]"}`}
                                >
                                  {service.name}
                                  <span className="font-sans text-[10px] tracking-[0.15em] opacity-60">
                                    0{index + 1}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Phone */}
            <div className="hidden lg:block">
              <a
                href="tel:5512067097"
                className="btn btn-rounded-full border border-premium-black bg-transparent text-black font-sans tracking-[2px] hover:border-premium-beige hover:bg-[color:var(--theme-cream)] hover:text-premium-black"
              >
                <Icons.Phone className="h-4 w-4" />
                (551) 206-7097
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <Hamburger open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        setOpen={setOpen}
        navItems={navItems}
        serviceTypes={serviceTypes}
      />
    </>
  );
}