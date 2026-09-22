"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPageForm() {
  return (
    <section
      className="relative overflow-hidden bg-[#1D1714] py-20 lg:py-18"
      style={{
        backgroundImage: "url('/images/gallery-herringbone.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-premium-black/95" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_470px] gap-16 lg:gap-28 items-start">
          {/* LEFT */}
          <div>
            <p className="font-sans text-[12px] tracking-[5px] uppercase text-premium-beige mb-8">
              Begin
            </p>

            <h2 className="font-cormorant text-theme-cream text-[46px] lg:text-[68px] leading-[1.05] max-w-[650px]">
              Let`&apos;s shape your{" "}
              <span className="italic text-premium-beige">next room.</span>
            </h2>

            <p className="mt-5 max-w-[620px] text-white/90 text-[16px] leading-10 font-sans">
              Consultations are personal and unhurried. Share your project below
              or reach us directly — we respond within two business days.
            </p>

            <div className="mt-5 border-t border-white/20">
              {/* Phone */}
              <div className="flex gap-6 py-6 border-b border-white/20">
                <Phone
                  size={20}
                  className="text-premium-beige mt-1 flex-shrink-0"
                />

                <div>
                  <p className="text-premium-beige uppercase tracking-[4px] text-[12px] font-sans mb-1">
                    Telephone
                  </p>

                  <h3 className="font-cormorant text-theme-cream text-[30px]">
                    551 206 7097
                  </h3>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 py-6 border-b border-white/20">
                <Mail
                  size={20}
                  className="text-premium-beige mt-1 flex-shrink-0"
                />

                <div>
                  <p className="text-premium-beige uppercase tracking-[4px] text-[12px] font-sans mb-1">
                    Correspondence
                  </p>

                  <h3 className="font-cormorant text-theme-cream text-[30px] break-all">
                    info@metrotilesandstones.com
                  </h3>
                </div>
              </div>

              {/* Studio */}
              <div className="flex gap-6 py-6">
                <MapPin
                  size={20}
                  className="text-premium-beige mt-1 flex-shrink-0"
                />

                <div>
                  <p className="text-premium-beige uppercase tracking-[4px] text-[12px] font-sans mb-1">
                    Studio
                  </p>

                  <h3 className="font-cormorant text-theme-cream text-[30px]">
                    Wayne, NJ · By appointment
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-theme-cream p-8 lg:p-10">
            <h3 className="text-caramel uppercase tracking-[5px] text-[12px] font-sans mb-7">
              Request a Consultation
            </h3>

            <form action="/api/contact" method="post" className="space-y-8 font-sans">
              <div>
                <label className="block text-[11px] uppercase tracking-[4px] text-premium-black/70 mb-3">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-b border-premium-black/20 pb-3 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[4px] text-premium-black/70 mb-4">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-b border-premium-black/20 pb-3 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[4px] text-premium-black/70 mb-4">
                  Phone
                </label>

                <input
                  name="phone"
                  type="text"
                  className="w-full bg-transparent border-b border-premium-black/20 pb-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[4px] text-premium-black/70 mb-4">
                  Project Location
                </label>

                <input
                  name="projectLocation"
                  type="text"
                  placeholder="City, NJ"
                  className="w-full bg-transparent border-b border-premium-black/20 pb-3 outline-none placeholder:text-premium-black/50"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[4px] text-premium-black/70 mb-2">
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  rows={4}
                  className="w-full resize-none bg-transparent border-b border-premium-black/20 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex h-12 items-center justify-center m-auto gap-4 bg-premium-black px-9 uppercase tracking-[0.3em] text-xs text-white transition hover:bg-caramel font-sans"
              >
                Send Inquiry
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
