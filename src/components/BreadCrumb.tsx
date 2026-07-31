import { ArrowUpRight } from "lucide-react";

interface BreadCrumbProps {
  label: string;
  title: string;
  highlight: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function BreadCrumb({
  label,
  title,
  highlight,
  primaryButton,
  secondaryButton,
}: BreadCrumbProps) {
  return (
    <section className="bg-premium-black/80 py-10 lg:py-10">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Left */}
          <div>
            <p className="font-sans text-[12px] uppercase tracking-[5px] text-premium-beige mb-8">
              {label}
            </p>

            <h1 className="font-cormorant text-theme-cream text-[40px] lg:text-[68px] leading-[1.05]">
              {title}{" "}
              <span className="italic text-premium-beige">{highlight}</span>
            </h1>
          </div>

          {/* Right */}
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:shrink-0">
  {primaryButton && (
    <a
      href={primaryButton.href}
      className="w-full sm:w-auto sm:min-w-[300px] bg-caramel hover:bg-premium-black text-theme-cream transition text-white uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-[12px] font-sans px-6 md:px-10 py-4 flex items-center justify-center gap-3"
    >
      {primaryButton.text}
      <span className="text-base"><ArrowUpRight /></span>
    </a>
  )}

  {secondaryButton && (
    <a
      href={secondaryButton.href}
      className="w-full sm:w-auto sm:min-w-[200px] border border-white/25 text-theme-cream hover:bg-white/5 transition uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-[12px] font-sans px-6 md:px-10 py-4 flex items-center justify-center"
    >
      {secondaryButton.text}
    </a>
  )}
</div>
        </div>
      </div>
    </section>
  );
}