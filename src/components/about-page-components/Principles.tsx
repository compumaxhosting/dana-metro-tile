const principles = [
  {
    number: "I",
    title: "Material first",
    description:
      "The stone leads the design. Pattern, cut, and layout follow the vein.",
  },
  {
    number: "II",
    title: "Patience",
    description:
      "We work at the pace precision demands. Never rushed, never approximate.",
  },
  {
    number: "III",
    title: "Discretion",
    description:
      "Quiet installs, clean sites, and complete confidentiality on private commissions.",
  },
];

export default function Principles() {
  return (
    <section className="bg-[#1e1916] py-32">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <p className="font-sans text-[12px] uppercase tracking-[5px] text-premium-beige mb-6">
            Principles
          </p>

          <h2 className="font-cormorant text-[50px] md:text-[60px] leading-[1.05] text-theme-cream max-w-[780px]">
            Three commitments we{" "}
            <span className="italic text-premium-beige">will not compromise.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#130E0B] border border-[#3A312D]">
          {principles.map((item, index) => (
            <div
              key={item.number}
              className={`px-10 py-8 ${
                index !== principles.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#3A312D]"
                  : ""
              }`}
            >
              <h3 className="font-cormorant text-[46px] text-[#C88733] mb-5">
                {item.number}
              </h3>

              <h4 className="font-cormorant text-[22px] text-theme-cream mb-3">
                {item.title}
              </h4>

              <p className="font-sans text-[14px] leading-6 text-theme-cream/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}