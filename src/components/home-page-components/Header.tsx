"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
                src="/logoo.png"
                alt="Metro Tiles & Stones"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-12 font-sans text-[13px] uppercase tracking-[2px]">
              {navItems.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
                return (
                  <div key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={`pb-1 transition-colors duration-200 ${isActive ? "text-premium-beige" : "text-[#333] hover:text-premium-beige"}`}
                    >
                      {item.name}
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
      />
    </>
  );
}