import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/data/blogs"; // Adjust path as needed

export default function BlogsHome() {
  // Automatically pull only the 3 most recent blogs for the homepage
  const recentBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-theme-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">
          {/* Left Side */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-caramel font-sans">
              Blogs
            </p>
            <h2 className="font-cormorant text-[46px] leading-none text-premium-black md:text-[72px]">
              Notes from the{" "}
              <span className="italic text-caramel">
                studio.
              </span>
            </h2>
          </div>

          {/* Right Side - Added Flexbox to stack the paragraph and the button */}
          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <p className="max-w-lg text-lg leading-9 text-premium-black font-sans">
              Field notes on material, technique, and the quiet
              decisions behind every install.
            </p>
            
            {/* View All Blogs Button */}
            <Link 
              href="/blogs"
              className="group/allbtn inline-flex items-center gap-3 border-b border-[#C38A38] pb-2 text-xs uppercase tracking-[0.35em] text-premium-black font-sans transition hover:text-caramel"
            >
              View All Blogs
              <ArrowUpRight
                size={15}
                className="transition group-hover/allbtn:translate-x-1 group-hover/allbtn:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Articles */}
        <div className="grid gap-10 lg:grid-cols-3">
          {recentBlogs.map((article) => (
            <article key={article.title} className="group">
              <div className="overflow-hidden">
                <Link href={`/blogs/${article.slug}`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[380px]"
                  />
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em]">
                <span className="text-caramel font-sans">
                  {article.category}
                </span>
                <span className="h-px w-7 bg-caramel" />
                <span className="text-premium-black font-sans">
                  {article.date}
                </span>
              </div>

              <h3 className="mt-6 font-cormorant text-[28px] leading-[1.3] text-premium-black">
                <Link href={`/blogs/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>

              <p className="mt-5 text-[13px] leading-6 text-premium-black/80 font-sans">
                {article.description}
              </p>

              <Link 
                href={`/blogs/${article.slug}`}
                className="group/btn mt-8 inline-flex items-center gap-3 border-b border-[#C38A38] pb-2 text-xs uppercase tracking-[0.35em] text-premium-black font-sans"
              >
                Read The Note
                <ArrowUpRight
                  size={15}
                  className="transition group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}