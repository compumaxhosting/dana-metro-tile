import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Grid2X2,
  Home,
  MapPin,
  Phone,
  Shapes,
} from "lucide-react";
import BackToTopButton from "@/components/layout/BackToTopButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileContactEasy from "@/components/layout/MobileContactEasy";
import Topbar from "@/components/layout/Topbar";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse every page for Metro Group Construction Tiles & Stones NJ tile, stone, masonry, blog, and New Jersey service location.",
  alternates: {
    canonical: "https://www.metrogroupconstruction.com/sitemap",
  },
};

const mainPages = [
  { title: "Home", description: "Discover our craft and services", href: "/", icon: Home },
  { title: "About", description: "Meet our team and principles", href: "/about", icon: Building2 },
  { title: "Services", description: "Explore tile, stone and masonry", href: "/services", icon: Shapes },
  { title: "Gallery", description: "View completed projects", href: "/gallery", icon: Grid2X2 },
  { title: "Journal", description: "Read ideas and practical guides", href: "/blogs", icon: BookOpen },
  { title: "Contact", description: "Start a conversation", href: "/contact", icon: Phone },
];

const serviceTypes = [
  { name: "Tile", slug: "tiles" },
  { name: "Stone", slug: "stones" },
  { name: "Masonry", slug: "masonry" },
];

const serviceAreas = [
  { name: "Wayne", slug: "wayne-nj" },
  { name: "Passaic County", slug: "passaic-county-nj" },
  { name: "Bergen County", slug: "bergen-county-nj" },
  { name: "Morris County", slug: "morris-county-nj" },
  { name: "Essex County", slug: "essex-county-nj" },
];

export default function SitemapPage() {
  return (
    <>
      <Topbar />
      <Header />

      <main className="bg-theme-cream">
        <section className="relative isolate overflow-hidden bg-premium-black px-5 py-20 text-theme-cream md:py-28 lg:px-8">
          <div className="absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full border border-premium-beige/20" />
          <div className="absolute right-[-3rem] top-[-5rem] h-52 w-52 rounded-full border border-premium-beige/10" />

          <div className="mx-auto max-w-7xl">
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.45em] text-premium-beige">
              Browse the collection
            </p>
            <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
              <h1 className="max-w-3xl font-cormorant text-[58px] leading-[0.92] md:text-[82px] lg:text-[96px]">
                Site <span className="italic text-premium-beige">Directory.</span>
              </h1>
              <p className="max-w-sm font-sans text-sm leading-7 text-white/65 md:pb-2">
                A complete guide to our services, service areas, and journal.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between border-b border-premium-black/10 pb-5">
              <div>
                <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.35em] text-caramel">
                  Explore
                </p>
                <h2 className="font-cormorant text-4xl md:text-5xl">Main pages</h2>
              </div>
              <span className="hidden font-sans text-[11px] uppercase tracking-[0.25em] text-premium-black/45 md:block">
                01
              </span>
            </div>

            <div className="grid gap-px overflow-hidden border border-premium-black/10 bg-premium-black/10 md:grid-cols-2 lg:grid-cols-3">
              {mainPages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group relative min-h-44 bg-theme-cream p-7 transition-colors duration-300 hover:bg-premium-black"
                  >
                    <Icon className="h-5 w-5 text-caramel" strokeWidth={1.5} />
                    <div className="absolute right-7 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-premium-black/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-premium-beige group-hover:text-premium-beige">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <h3 className="mt-12 font-cormorant text-3xl transition-colors group-hover:text-theme-cream">
                      {page.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-5 text-premium-black/55 transition-colors group-hover:text-white/55">
                      {page.description}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="mt-20 md:mt-24">
              <div className="mb-10 flex items-end justify-between border-b border-premium-black/10 pb-5">
                <div>
                  <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.35em] text-caramel">
                    By location
                  </p>
                  <h2 className="font-cormorant text-4xl md:text-5xl">Service areas</h2>
                </div>
                <span className="hidden font-sans text-[11px] uppercase tracking-[0.25em] text-premium-black/45 md:block">
                  02
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {serviceTypes.map((service, serviceIndex) => (
                  <div key={service.slug} className="border-t border-premium-black pt-5">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="font-cormorant text-3xl">{service.name}</h3>
                      <span className="font-sans text-[10px] tracking-[0.25em] text-caramel">
                        0{serviceIndex + 1}
                      </span>
                    </div>
                    <ul className="divide-y divide-premium-black/10 border-b border-premium-black/10">
                      {serviceAreas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            href={`/services/${service.slug}/${area.slug}`}
                            className="group flex items-center justify-between py-4 font-sans text-[13px] text-premium-black/70 transition-colors hover:text-caramel"
                          >
                            <span className="flex items-center gap-3">
                              <MapPin className="h-3.5 w-3.5 text-caramel" strokeWidth={1.5} />
                              {area.name}
                            </span>
                            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 md:mt-24">
              <div className="mb-10 flex items-end justify-between border-b border-premium-black/10 pb-5">
                <div>
                  <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.35em] text-caramel">
                    From the journal
                  </p>
                  <h2 className="font-cormorant text-4xl md:text-5xl">Blog articles</h2>
                </div>
                <span className="hidden font-sans text-[11px] uppercase tracking-[0.25em] text-premium-black/45 md:block">
                  03
                </span>
              </div>

              <div className="grid gap-x-10 md:grid-cols-2">
                {blogs.map((blog, index) => (
                  <Link
                    key={blog.slug}
                    href={`/blogs/${blog.slug}`}
                    className="group flex items-start gap-5 border-b border-premium-black/10 py-6"
                  >
                    <span className="pt-1 font-sans text-[10px] tracking-[0.2em] text-caramel">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-cormorant text-[25px] leading-[1.15] transition-colors group-hover:text-caramel">
                        {blog.title}
                      </h3>
                      <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.2em] text-premium-black/45">
                        {blog.category}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileContactEasy />
      <BackToTopButton />
      <Footer />
    </>
  );
}
