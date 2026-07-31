import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "MATERIAL",
    date: "MARCH 2026",
    title: "Reading a slab: the case for book-matched onyx.",
    description:
      "Why we spend hours at the yard before a single cut, and what a vein tells us about the room it will live in.",
    image: "/images/a2.jpeg",
  },
  {
    category: "TECHNIQUE",
    date: "FEBRUARY 2026",
    title: "The forgotten geometry of herringbone.",
    description:
      "A short history of a pattern that has quietly outlasted every design trend of the last four centuries.",
    image: "/images/a4.jpeg",
  },
  {
    category: "CRAFT",
    date: "JANUARY 2026",
    title: "Wet rooms, dry logic: sealing marble that lasts.",
    description:
      "The step-by-step sealing regimen we use to keep pale marble showers pristine for decades, not seasons.",
    image: "/images/a3.jpeg",
  },
];

export default function BlogsHome() {
  return (
    <section className="bg-theme-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}

        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">
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

          <p className="max-w-lg text-lg leading-9 text-premium-black font-sans">
            Field notes on material, technique, and the quiet
            decisions behind every install.
          </p>
        </div>

        {/* Articles */}

        <div className="grid gap-10 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group">
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[380px]"
                />
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

              {/* Title */}

              <h3 className="mt-6 font-cormorant text-[28px] leading-[1.3] text-premium-black">
                {article.title}
              </h3>

              {/* Description */}

              <p className="mt-5 text-[13px] leading-6 text-premium-black/80 font-sans">
                {article.description}
              </p>

              {/* CTA */}

              <button className="group/btn mt-8 inline-flex items-center gap-3 border-b border-[#C38A38] pb-2 text-xs uppercase tracking-[0.35em] text-premium-black font-sans">
                Read The Note

                <ArrowUpRight
                  size={15}
                  className="transition group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}