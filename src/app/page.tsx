import About from "@/components/About";
import BreadCrumb from "@/components/BreadCrumb";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioHome from "@/components/PortfolioHome";
import Testimonial from "@/components/Testimonial";
import Topbar from "@/components/Topbar";
import Blogs from "@/components/BlogsHome";
import BlogsHome from "@/components/BlogsHome";

export default function Home() {
  return (
    <>
    <Topbar/>
    <Header />
    <Hero />
    <About />
    <Disciplines />
    <PortfolioHome />
    <Testimonial />
    <BlogsHome />
    <BreadCrumb
  label="BEGIN"
  title="Shape your next"
  highlight="room."
  primaryButton={{
    text: "BOOK A CONSULTATION",
    href: "/contact",
  }}
  secondaryButton={{
    text: "SEE THE WORK",
    href: "/portfolio",
  }}
/>
    <Footer/>
    </>
  );
}
