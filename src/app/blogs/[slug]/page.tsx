import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

// LAYOUT COMPONENTS
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";
import MobileContactEasy from "@/components/layout/MobileContactEasy";
import BackToTopButton from "@/components/layout/BackToTopButton";

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tilesandstonesnj.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  const canonicalUrl = blog.seo.canonical || `${SITE_URL}/blogs/${blog.slug}`;

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords,
    robots: blog.seo.robots ? blog.seo.robots : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      url: canonicalUrl,
      siteName: "Tiles & Stones NJ",
      images: [
        {
          url: blog.seo.ogImage || blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      publishedTime: blog.datePublished,
      authors: [blog.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.seo.ogImage || blog.image],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const canonicalUrl = blog.seo.canonical || `${SITE_URL}/blogs/${blog.slug}`;

  // Schema.org structured data setup for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: `${SITE_URL}${blog.image}`,
    datePublished: blog.datePublished,
    author: {
      "@type": "Organization",
      name: blog.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Tiles & Stones NJ",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      {/* Dynamic JSON-LD Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Topbar />
      <Header />

      <main className="bg-[#FDFBF7] min-h-screen py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* BLOG POST GRID LAYOUT (12 Columns: 8 for Content, 4 for Sticky Sidebar) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: MAIN ARTICLE CONTENT (Takes 8 columns) */}
            <article className="lg:col-span-8">

              {/* Article Header */}
              <header className="mb-10">
                <div className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em]">
                  <span className="text-[#C38A38] font-sans font-semibold">{blog.category}</span>
                  <span className="h-px w-7 bg-[#C38A38]" />
                  <span className="text-[#1A1A1A] font-sans">{blog.date}</span>
                </div>

                <h1 className="font-cormorant text-[28px] leading-tight text-[#1A1A1A] md:text-[35px] mb-6">
                  {blog.title}
                </h1>
              </header>

              {/* Featured Main Image */}
              <div className="mb-10 overflow-hidden border border-[#E5E5E5] shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[380px] md:h-[480px] object-cover"
                />
              </div>

              {/* Editorial Quote Box */}
              <div className="mb-12 bg-[#F9F8F6] p-8 border-l-2 border-[#C38A38] italic font-cormorant text-[20px] text-[#1A1A1A] leading-relaxed">
                "Expert tile installation and remodeling can completely transform your home. Here’s everything you need to know in 2026."
              </div>

              {/* Main HTML Content Body */}
              <div
                className="prose prose-lg max-w-none font-sans text-[#333333] leading-8 space-y-6"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

            </article>

            {/* RIGHT COLUMN: SIDEBAR (Takes 4 columns, sticky positioned, centered items) */}
            <aside className="lg:col-span-4 flex flex-col items-center w-full space-y-8 lg:sticky lg:top-8">

              {/* Card 3: Single Clean Sidebar Image */}
              <div className="bg-white p-4 border border-[#E5E5E5] shadow-sm w-full text-center">
                <div className="overflow-hidden mb-3">
                  <img
                    src="/images/a3.webp"
                    alt="Tile detail view"
                    className="w-full h-44 object-cover filter brightness-95"
                  />
                </div>
                <h4 className="font-cormorant text-[16px] text-[#1A1A1A] mb-1 font-medium">Precision Craftsmanship</h4>
                <p className="text-[11px] text-[#333333] leading-relaxed">
                  Every cut, joint, and waterproof membrane is measured for flawless structural longevity.
                </p>
              </div>

              {/* Card 4: Call-To-Action Estimate Banner */}
              <div className="bg-[#1A1A1A] text-white p-6 text-center space-y-4 shadow-sm w-full">
                <span className="text-[10px] tracking-[0.25em] text-[#C38A38] uppercase font-semibold block">Ready to Transform Your Home?</span>
                <h3 className="font-cormorant text-[24px]">Get a Free Estimate Today!</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Connect with our design team for custom project estimates and material sourcing.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2.5 bg-white text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C38A38] hover:text-white transition-colors"
                >
                  Contact Us Now
                </Link>
                <div className="pt-2 border-t border-neutral-800">
                  <a href="tel:9735550123" className="font-cormorant text-[20px] font-semibold tracking-wide hover:text-[#C38A38] transition-colors flex items-center justify-center gap-2">
                    (973) 555-0123
                  </a>
                </div>
              </div>

              {/* Card 5: Service Areas */}
              <div className="bg-[#F9F8F6] p-6 border border-[#E5E5E5] shadow-sm w-full text-center">
                <h3 className="font-cormorant text-[22px] text-[#1A1A1A] mb-3 border-b border-[#C38A38] pb-2 font-semibold inline-block">
                  Service Areas
                </h3>
                <p className="text-xs text-[#333333] leading-relaxed">
                  We proudly serve all of Passaic County, including: Paterson, Clifton, Passaic, Wayne, West Milford, Totowa, Little Falls, Woodland Park & more.
                </p>
              </div>

            </aside>

          </div>

        </div>
      </main>

      <MobileContactEasy />
      <BackToTopButton />
      <Footer />
    </>
  );
}