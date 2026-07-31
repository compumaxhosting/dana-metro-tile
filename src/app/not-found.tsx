"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-premium-black px-6">
      {/* Background 404 */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="font-cormorant text-[220px] md:text-[320px] lg:text-[420px] leading-none text-white/[0.08] select-none">
          404
        </h1>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="mb-6 font-sans text-[12px] uppercase tracking-[6px] text-premium-beige">
          ERROR 404
        </p>

        <h1 className="font-cormorant text-[56px] leading-[1.05] text-theme-cream md:text-[76px] lg:text-[92px]">
          This room{" "}
          <span className="italic text-premium-beige">doesn't exist.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl font-sans text-[17px] leading-8 text-white/70">
          Sometimes the finest spaces are the ones still waiting to be
          discovered. The page you're looking for couldn't be found, but the
          rest of our craftsmanship is just a click away.
        </p>

        <div className="mt-14 flex justify-center">
          <Link
            href="/"
            className="inline-flex h-14 items-center justify-center bg-premium-beige px-10 lg:px-12 font-sans text-[12px] uppercase tracking-[4px] text-premium-black transition-all duration-300 hover:bg-[#B88446] hover:-translate-y-[1px]"
          >
            Return Home
            <span className="ml-3 text-base"><ArrowUpRight /></span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}