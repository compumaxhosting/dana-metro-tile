import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dan treated our foyer like a piece of sculpture. The book-matched onyx is the first thing every guest notices.",
    name: "Elena R.",
    role: "HOMEOWNER · ALPINE, NJ",
  },
  {
    quote:
      "Precision I have not seen in twenty years of specifying stone. Grout lines you could measure with a caliper.",
    name: "Marcus D.",
    role: "INTERIOR ARCHITECT",
  },
  {
    quote:
      "From slab selection to the final polish, the studio was calm, discreet, and exact. Worth every hour.",
    name: "Priya S.",
    role: "HOMEOWNER · SHORT HILLS",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#f2eee7] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-caramel font-sans">
            Voices
          </p>

          <h2 className="font-cormorant text-[46px] leading-none text-premium-black md:text-[62px]">
            What our{" "}
            <span className="italic text-caramel">
              clients
            </span>{" "}
            say.
          </h2>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="relative flex min-h-[370px] flex-col border border-premium-beige bg-[#FBF9F5] p-10 transition duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}

              <Quote
                className="absolute right-8 top-8 text-caramel"
                size={28}
                strokeWidth={1.6}
              />

              {/* Quote */}

              <p className="font-cormorant pt-4 text-[22px] italic leading-[1.8] text-premium-black">
                {item.quote}
              </p>

              {/* Bottom */}

              <div className="mt-auto">
                <div className="mb-8 h-px w-14 bg-[#C48B3A]" />

                <h4 className="text-xl font-medium text-premium-premium-black font-serif text-premium-black">
                  {item.name}
                </h4>

                <p className="mt-2 text-[13px] uppercase tracking-[0.35em] text-caramel font-sans">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}