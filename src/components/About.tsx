import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-theme-cream py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
          {/* LEFT IMAGE */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <img
              src="/images/a1.jpeg"
              alt="Luxury Home"
              className="h-[500px] w-full object-cover md:h-[650px]"
            />

            {/* Quote Card (Desktop Only) */}
            <div className="absolute -bottom-6 right-[-24px] hidden w-[240px] border border-caramel bg-theme-cream px-8 py-7 lg:block">
              <p className="font-serif text-[18px] italic leading-[1.4] text-premium-black">
                "Every seam a
                <br />
                signature."
              </p>

              <p className="mt-4 text-[12px] uppercase tracking-[0.35em] text-caramel font-sans">
                — Dan Kush
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.38em] text-caramel font-sans font-semibold">
              About The House
            </p>

            <h2 className="font-cormorant text-[40px] leading-[1.1] text-premium-black md:text-[58px]">
              A studio built on stone,
              patience, and precision.
            </h2>

            <div className="mt-10 space-y-2 text-md leading-10 text-premium-black/80 font-sans">
              <p>
                From our New Jersey workshop, we craft interiors where every
                vein, every grout line, and every reveal is considered.
              </p>

              <p>
                Our clients are architects, designers, and homeowners who
                understand that great stone is not decoration — it is
                architecture.
              </p>
            </div>

            <Link href="/about" className="group mt-14 inline-flex items-center gap-3 border-b border-caramel pb-2 text-[13px] uppercase tracking-[0.35em] text-premium-premium-black transition-all hover:gap-5 font-sans text-premium-black">
              Read Our Story
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;