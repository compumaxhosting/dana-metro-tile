import Footer from "@/components/home-page-components/Footer";
import Header from "@/components/home-page-components/Header";
import ServiceHero from "@/components/services-page-components/ServiceHero";
import ServicePageServices from "@/components/services-page-components/ServicePageServices";
import Topbar from "@/components/home-page-components/Topbar";

export default function services() {
  return (
    <>
    <Topbar/>
    <Header/>
    <ServiceHero />
    <ServicePageServices />
    <Footer />
    </>
  );
}
