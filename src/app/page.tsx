import About from "@/components/home-page-components/About";
import BreadCrumb from "@/components/home-page-components/BreadCrumb";
import Disciplines from "@/components/home-page-components/Disciplines";
import Footer from "@/components/home-page-components/Footer";
import Header from "@/components/home-page-components/Header";
import Hero from "@/components/home-page-components/Hero";
import PortfolioHome from "@/components/home-page-components/PortfolioHome";
import Testimonial from "@/components/home-page-components/Testimonial";
import Topbar from "@/components/home-page-components/Topbar";
import Blogs from "@/components/home-page-components/BlogsHome";
import BlogsHome from "@/components/home-page-components/BlogsHome";

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
    href: "/gallery",
  }}
/>
    <Footer/>
    </>
  );
}
