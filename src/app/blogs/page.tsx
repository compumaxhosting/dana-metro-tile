import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";
import BackToTopButton from "@/components/layout/BackToTopButton";
import MobileContactEasy from "@/components/layout/MobileContactEasy";

export const metadata = {
  title: "All Studio Notes | Your Studio Name",
  description: "Browse all field notes on material, technique, and design logic.",
};

export default function AllBlogsPage() {
  return (
    <>
      <Topbar />
      <Header />
      <section className="bg-theme-cream min-h-screen py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="font-cormorant text-[46px] leading-none text-premium-black md:text-[72px] mb-16 border-b border-premium-black/10 pb-8">
            All <span className="italic text-caramel">Blogs.</span>
          </h1>

          <div className="grid gap-10 lg:grid-cols-3">
            {blogs.map((article) => (
              <article key={article.slug} className="group flex flex-col h-full">
                {/* Image */}
                <div className="overflow-hidden">
                  <Link href={`/blogs/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[380px]"
                    />
                  </Link>
                </div>

                {/* Meta */}
                <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em]">
                  <span className="text-caramel font-sans">
                    {article.category}
                  </span>

                  <span className="h-px w-7 bg-caramel" />

                  <span className="text-premium-black font-sans">
                    {article.date}
                  </span>
                </div>

                {/* Title with line-clamp-2 */}
                <h3 className="mt-6 font-cormorant text-[28px] leading-[1.3] text-premium-black line-clamp-2">
                  <Link href={`/blogs/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Description with line-clamp-3 */}
                <p className="mt-5 text-[13px] leading-6 text-premium-black/80 font-sans line-clamp-3">
                  {article.description}
                </p>

                {/* CTA pushed to bottom with mt-auto */}
                <div className="mt-auto pt-8">
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="group/btn inline-flex items-center gap-3 border-b border-[#C38A38] pb-2 text-xs uppercase tracking-[0.35em] text-premium-black font-sans w-fit"
                  >
                    Read The Note
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MobileContactEasy />
      <BackToTopButton />
      <Footer />
    </>
  );
}