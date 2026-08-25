import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// ⬇ IMPORT YOUR HEADER AND FOOTER HERE
import Header from "@/components/Header"; // Adjust the path based on your folder structure
import Footer from "@/components/Footer"; // Adjust the path based on your folder structure
import Topbar from "@/components/Topbar";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords,
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Topbar />
      {/* HEADER COMPONENT */}
      <Header />

      <main className="bg-theme-cream min-h-screen py-20 lg:py-28">
        <article className="mx-auto max-w-4xl px-5 lg:px-8">
          
          <header className="mb-12 text-center">
            <div className="mb-6 flex justify-center items-center gap-4 text-[11px] uppercase tracking-[0.35em]">
              <span className="text-[#C38A38] font-sans">{blog.category}</span>
              <span className="h-px w-7 bg-[#C38A38]" />
              <span className="text-[#1A1A1A] font-sans">{blog.date}</span>
            </div>
            
            <h1 className="font-cormorant text-[40px] leading-tight text-[#1A1A1A] md:text-[64px]">
              {blog.title}
            </h1>
          </header>

          <div className="mb-16 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>

          <div 
            className="prose prose-lg mx-auto font-sans text-[#333333]"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
          
        </article>
      </main>

      {/* FOOTER COMPONENT */}
      <Footer />
    </>
  );
}